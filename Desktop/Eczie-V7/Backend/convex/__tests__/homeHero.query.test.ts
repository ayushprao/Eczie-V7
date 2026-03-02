import { computeCalendarDayStreak, isoDayKeyFromDate } from "../home/streak";

describe("computeCalendarDayStreak", () => {
  test("returns 0 for empty logs", () => {
    expect(computeCalendarDayStreak({ localDayKeys: [], todayKey: "2026-03-02" })).toBe(0);
  });

  test("counts a contiguous streak including today", () => {
    expect(
      computeCalendarDayStreak({
        localDayKeys: ["2026-02-27", "2026-02-28", "2026-03-01", "2026-03-02"],
        todayKey: "2026-03-02",
      }),
    ).toBe(4);
  });

  test("keeps streak when today missing but yesterday present", () => {
    expect(
      computeCalendarDayStreak({
        localDayKeys: ["2026-02-28", "2026-03-01"],
        todayKey: "2026-03-02",
      }),
    ).toBe(2);
  });

  test("resets streak after full missed day", () => {
    expect(
      computeCalendarDayStreak({
        localDayKeys: ["2026-02-25", "2026-02-26"],
        todayKey: "2026-03-02",
      }),
    ).toBe(0);
  });

  test("deduplicates multiple logs from same day", () => {
    expect(
      computeCalendarDayStreak({
        localDayKeys: ["2026-03-01", "2026-03-01", "2026-03-02"],
        todayKey: "2026-03-02",
      }),
    ).toBe(2);
  });
});

describe("isoDayKeyFromDate", () => {
  test("produces timezone-aware key", () => {
    const utc = isoDayKeyFromDate(new Date("2026-03-02T01:00:00.000Z"), "UTC");
    const ny = isoDayKeyFromDate(new Date("2026-03-02T01:00:00.000Z"), "America/New_York");

    expect(utc).toBe("2026-03-02");
    expect(ny).toBe("2026-03-01");
  });
});
