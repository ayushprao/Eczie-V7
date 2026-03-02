import React from "react";
import { render, screen } from "@testing-library/react-native";
import { HeroHeader } from "../components/HeroHeader";

describe("HeroHeader performance", () => {
  test("date and greeting are available within 300ms budget under warm data", async () => {
    const started = Date.now();

    render(
      <HeroHeader
        deps={{
          fetchHero: async () => ({ firstName: "Ayush", streakCount: 8, mascotAssetKey: "eczie-calm" }),
          now: () => new Date("2025-06-21T10:00:00.000Z"),
          getLocale: () => "en-US",
          getTimezone: () => "UTC",
        }}
      />,
    );

    await screen.findByText("Welcome back, Ayush");
    const elapsed = Date.now() - started;

    expect(elapsed).toBeLessThanOrEqual(300);
  });
});
