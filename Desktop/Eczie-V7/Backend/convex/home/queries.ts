import { computeCalendarDayStreak, isoDayKeyFromDate } from "./streak";

export type GetHeroHeaderInput = {
  timezone: string;
  locale: string;
  nowIso?: string;
};

export type GetHeroHeaderResponse = {
  firstName: string | null;
  streakCount: number;
  mascotAssetKey: "eczie-calm" | "eczie-empathetic";
};

export type HeroUserRecord = {
  userId: string;
  firstName: string | null;
  hasActiveFlareSignal?: boolean;
};

export type HeroLogRecord = {
  userId: string;
  localDayKey: string;
};

export type HeroQueryContext = {
  auth: {
    getUserId: () => string | null;
  };
  db: {
    getUserById: (userId: string) => Promise<HeroUserRecord | null>;
    getLogsByUserId: (userId: string) => Promise<HeroLogRecord[]>;
  };
  audit: {
    logSensitiveRead: (event: {
      actorUserId: string;
      resource: string;
      metadata?: Record<string, string>;
    }) => Promise<void>;
  };
};

function isValidTimezone(value: string): boolean {
  try {
    Intl.DateTimeFormat(undefined, { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

function isValidIso(value: string): boolean {
  return !Number.isNaN(Date.parse(value));
}

export async function getHeroHeader(
  ctx: HeroQueryContext,
  input: GetHeroHeaderInput,
): Promise<GetHeroHeaderResponse> {
  const actorUserId = ctx.auth.getUserId();
  if (!actorUserId) {
    throw new Error("UNAUTHENTICATED");
  }

  if (!input.locale || !input.timezone || !isValidTimezone(input.timezone)) {
    throw new Error("INVALID_ARGUMENT");
  }

  if (input.nowIso && !isValidIso(input.nowIso)) {
    throw new Error("INVALID_ARGUMENT");
  }

  // Audit sensitive read access before returning personalized health-related context.
  await ctx.audit.logSensitiveRead({
    actorUserId,
    resource: "home.getHeroHeader",
    metadata: { timezone: input.timezone },
  });

  const user = await ctx.db.getUserById(actorUserId);
  if (!user || user.userId !== actorUserId) {
    throw new Error("UNAUTHENTICATED");
  }

  const logs = await ctx.db.getLogsByUserId(actorUserId);
  const now = input.nowIso ? new Date(input.nowIso) : new Date();
  const todayKey = isoDayKeyFromDate(now, input.timezone);

  const localDayKeys = logs
    .filter((log) => log.userId === actorUserId)
    .map((log) => log.localDayKey);

  const streakCount = computeCalendarDayStreak({
    localDayKeys,
    todayKey,
  });

  return {
    firstName: user.firstName,
    streakCount,
    mascotAssetKey: user.hasActiveFlareSignal ? "eczie-empathetic" : "eczie-calm",
  };
}
