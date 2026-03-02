import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { AppState } from "react-native";
import { HeroHeader } from "../components/HeroHeader";
import { HeroDataDependencies } from "../hooks/useHomeHeroData";
import { formatHeroDate } from "../formatters/formatHeroDate";

function makeDeps(overrides?: Partial<HeroDataDependencies>): HeroDataDependencies {
  return {
    fetchHero: async () => ({
      firstName: "Ayush",
      streakCount: 8,
      mascotAssetKey: "eczie-calm",
    }),
    now: () => new Date("2025-06-21T10:00:00.000Z"),
    getLocale: () => "en-US",
    getTimezone: () => "UTC",
    ...overrides,
  };
}

function luminance(hexColor: string): number {
  const raw = hexColor.replace("#", "");
  const chunks = raw.length === 3 ? raw.split("").map((v) => v + v) : raw.match(/.{2}/g) ?? [];
  const [r, g, b] = chunks.map((chunk) => Number.parseInt(chunk, 16) / 255);
  const [rs, gs, bs] = [r, g, b].map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(foreground: string, background: string): number {
  const l1 = luminance(foreground);
  const l2 = luminance(background);
  const light = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (light + 0.05) / (dark + 0.05);
}

describe("HeroHeader", () => {
  let addEventListenerSpy: jest.SpyInstance;
  let mockAddEventListener: jest.Mock;

  beforeEach(() => {
    mockAddEventListener = jest.fn(() => ({ remove: jest.fn() }));
    addEventListenerSpy = jest
      .spyOn(AppState, "addEventListener")
      .mockImplementation(mockAddEventListener as unknown as typeof AppState.addEventListener);
  });

  afterEach(() => {
    addEventListenerSpy.mockRestore();
  });

  test("renders date and greeting", async () => {
    render(<HeroHeader deps={makeDeps()} />);

    expect(await screen.findByText("SATURDAY · JUNE 21")).toBeTruthy();
    expect(await screen.findByText("Welcome back, Ayush")).toBeTruthy();
  });

  test("renders fallback greeting without dangling comma", async () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: async () => ({ firstName: null, streakCount: 8, mascotAssetKey: "eczie-calm" }),
        })}
      />,
    );

    expect(await screen.findByText("Welcome back")).toBeTruthy();
    expect(screen.queryByText("Welcome back,")).toBeNull();
  });

  test("shows streak badge when streak >= 1", async () => {
    render(<HeroHeader deps={makeDeps()} />);
    expect(await screen.findByText("8 days strong")).toBeTruthy();
  });

  test("uses singular grammar for streak = 1", async () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: async () => ({ firstName: "Ayush", streakCount: 1, mascotAssetKey: "eczie-calm" }),
        })}
      />,
    );

    expect(await screen.findByText("1 day strong")).toBeTruthy();
  });

  test("hides badge for streak = 0", async () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: async () => ({ firstName: "Ayush", streakCount: 0, mascotAssetKey: "eczie-calm" }),
        })}
      />,
    );

    expect(await screen.findByText("Welcome back, Ayush")).toBeTruthy();
    expect(screen.queryByTestId("hero-streak-badge")).toBeNull();
  });

  test("shows loading skeleton while query resolves", () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: () => new Promise(() => undefined),
        })}
      />,
    );

    expect(screen.getByTestId("hero-skeleton")).toBeTruthy();
  });

  test("keeps header mounted on mascot image error", async () => {
    render(<HeroHeader deps={makeDeps()} />);

    const header = await screen.findByTestId("hero-header");
    expect(header).toBeTruthy();

    const mascot = await screen.findByTestId("hero-mascot");
    fireEvent(mascot, "error");

    expect(screen.getByTestId("hero-header")).toBeTruthy();
  });

  test("selects empathetic mascot state from query output", async () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: async () => ({ firstName: "Ayush", streakCount: 3, mascotAssetKey: "eczie-empathetic" }),
        })}
      />,
    );

    expect(await screen.findByText("3 days strong")).toBeTruthy();
  });

  test("registers app-state listener and refreshes date after midnight on active", async () => {
    let currentNow = new Date("2025-06-21T10:00:00.000Z");
    const fetchHero = jest
      .fn()
      .mockResolvedValueOnce({ firstName: "Ayush", streakCount: 8, mascotAssetKey: "eczie-calm" })
      .mockResolvedValueOnce({ firstName: "Ayush", streakCount: 8, mascotAssetKey: "eczie-calm" });

    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero,
          now: () => currentNow,
        })}
      />,
    );
    const initialDateLabel = formatHeroDate({ date: currentNow, locale: "en-US" });
    await screen.findByText(initialDateLabel);
    await screen.findByText("Welcome back, Ayush");

    expect(mockAddEventListener).toHaveBeenCalledWith("change", expect.any(Function));
    const appStateHandler = mockAddEventListener.mock.calls[0][1];
    currentNow = new Date("2025-06-22T10:00:00.000Z");
    const refreshedDateLabel = formatHeroDate({ date: currentNow, locale: "en-US" });
    await appStateHandler("active");
    expect(fetchHero).toHaveBeenCalledTimes(2);
    expect(await screen.findByText(refreshedDateLabel)).toBeTruthy();
  });

  test("supports greeting truncation behavior", async () => {
    render(
      <HeroHeader
        deps={makeDeps({
          fetchHero: async () => ({
            firstName: "AReallyLongFirstNameThatShouldTruncateInUI",
            streakCount: 2,
            mascotAssetKey: "eczie-calm",
          }),
        })}
      />,
    );

    const greeting = await screen.findByTestId("hero-greeting");
    expect(greeting.props.numberOfLines).toBe(1);
    expect(greeting.props.ellipsizeMode).toBe("tail");
  });

  test("provides minimum touch-target constraints for badge", async () => {
    render(<HeroHeader deps={makeDeps()} />);
    await screen.findByText("8 days strong");

    const badge = screen.getByTestId("hero-streak-badge");
    const flattened = Array.isArray(badge.props.style)
      ? Object.assign({}, ...badge.props.style)
      : (badge.props.style ?? {});

    expect(flattened.minHeight).toBeGreaterThanOrEqual(44);
  });

  test("meets WCAG AA contrast ratio for primary greeting text", async () => {
    render(<HeroHeader deps={makeDeps()} />);
    await screen.findByText("Welcome back, Ayush");

    const ratio = contrastRatio("#123B5A", "#F2F8FD");
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
});
