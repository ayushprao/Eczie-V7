import { useEffect, useMemo, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import { formatHeroDate } from "../formatters/formatHeroDate";
import { buildGreeting } from "../selectors/buildGreeting";
import { MascotAssetKey } from "../constants/mascotAssetMap";

export type HeroQueryInput = {
  timezone: string;
  locale: string;
  nowIso?: string;
};

export type HeroQueryResponse = {
  firstName: string | null;
  streakCount: number;
  mascotAssetKey: MascotAssetKey;
};

export type HomeHeroData = {
  dateLabel: string;
  greetingText: string;
  streakCount: number;
  mascotAssetKey: MascotAssetKey;
  isLoading: boolean;
};

export type HeroDataDependencies = {
  fetchHero: (input: HeroQueryInput) => Promise<HeroQueryResponse>;
  now: () => Date;
  getLocale: () => string;
  getTimezone: () => string;
};

const defaultDeps: HeroDataDependencies = {
  // Placeholder until integrated with Convex client query.
  fetchHero: async () => ({
    firstName: null,
    streakCount: 0,
    mascotAssetKey: "eczie-calm",
  }),
  now: () => new Date(),
  getLocale: () => Intl.DateTimeFormat().resolvedOptions().locale || "en-US",
  getTimezone: () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
};

export function useHomeHeroData(deps: HeroDataDependencies = defaultDeps): HomeHeroData {
  const [queryResult, setQueryResult] = useState<HeroQueryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<Date>(deps.now());

  useEffect(() => {
    let cancelled = false;

    async function loadHero(nowOverride?: Date): Promise<void> {
      setIsLoading(true);
      const locale = deps.getLocale();
      const timezone = deps.getTimezone();
      const now = nowOverride ?? deps.now();
      const result = await deps.fetchHero({ locale, timezone, nowIso: now.toISOString() });

      if (!cancelled) {
        setQueryResult(result);
        setCurrentDate(now);
        setIsLoading(false);
      }
    }

    void loadHero();

    const sub = AppState.addEventListener("change", (nextState: AppStateStatus) => {
      if (nextState === "active") {
        void loadHero(deps.now());
      }
    });

    return () => {
      cancelled = true;
      sub.remove();
    };
  }, [deps]);

  return useMemo(() => {
    const locale = deps.getLocale();

    return {
      dateLabel: formatHeroDate({ date: currentDate, locale }),
      greetingText: buildGreeting(queryResult?.firstName),
      streakCount: queryResult?.streakCount ?? 0,
      mascotAssetKey: queryResult?.mascotAssetKey ?? "eczie-calm",
      isLoading,
    };
  }, [currentDate, deps, isLoading, queryResult]);
}
