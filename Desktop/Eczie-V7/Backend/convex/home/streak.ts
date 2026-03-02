export type StreakComputationInput = {
  localDayKeys: string[];
  todayKey: string;
};

/**
 * Computes calendar-day streak with grace rule:
 * - Missing today does not break streak unless yesterday is also missing.
 * - Multiple logs in a day count once.
 */
export function computeCalendarDayStreak({ localDayKeys, todayKey }: StreakComputationInput): number {
  const uniqueDays = Array.from(new Set(localDayKeys)).sort();
  if (uniqueDays.length === 0) {
    return 0;
  }

  const daySet = new Set(uniqueDays);
  const yesterday = addDays(todayKey, -1);

  let cursor: string;
  if (daySet.has(todayKey)) {
    cursor = todayKey;
  } else if (daySet.has(yesterday)) {
    cursor = yesterday;
  } else {
    return 0;
  }

  let streak = 0;
  while (daySet.has(cursor)) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }

  return streak;
}

export function isoDayKeyFromDate(date: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Unable to resolve local day key");
  }

  return `${year}-${month}-${day}`;
}

function addDays(dayKey: string, offset: number): string {
  const [year, month, day] = dayKey.split("-").map((value) => Number(value));
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + offset);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
