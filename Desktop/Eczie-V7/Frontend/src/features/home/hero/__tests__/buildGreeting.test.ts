import { buildGreeting } from "../selectors/buildGreeting";

describe("buildGreeting", () => {
  test("uses first name when available", () => {
    expect(buildGreeting("Ayush")).toBe("Welcome back, Ayush");
  });

  test("trims whitespace around first name", () => {
    expect(buildGreeting("  Ayush  ")).toBe("Welcome back, Ayush");
  });

  test("falls back to base greeting when absent", () => {
    expect(buildGreeting(undefined)).toBe("Welcome back");
    expect(buildGreeting(null)).toBe("Welcome back");
    expect(buildGreeting("   ")).toBe("Welcome back");
  });
});
