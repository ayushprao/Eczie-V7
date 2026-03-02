import { formatHeroDate } from "../formatters/formatHeroDate";

describe("formatHeroDate", () => {
  test("formats as uppercase WEEKDAY · MONTH DAY", () => {
    const value = formatHeroDate({ date: new Date("2025-06-21T10:00:00.000Z"), locale: "en-US" });
    expect(value).toBe("SATURDAY · JUNE 21");
  });

  test("localizes weekday and month", () => {
    const value = formatHeroDate({ date: new Date("2025-06-21T10:00:00.000Z"), locale: "fr-FR" });
    expect(value.includes("JUIN")).toBe(true);
    expect(value).toContain(" · ");
  });
});
