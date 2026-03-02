import { getHeroHeader } from "../home/queries";

function createBaseCtx() {
  return {
    auth: {
      getUserId: () => "u1",
    },
    db: {
      getUserById: async () => ({ userId: "u1", firstName: "Ayush", hasActiveFlareSignal: false }),
      getLogsByUserId: async () => [{ userId: "u1", localDayKey: "2026-03-01" }],
    },
    audit: {
      logSensitiveRead: async () => {
        return;
      },
    },
  };
}

describe("getHeroHeader contract", () => {
  test("rejects unauthenticated requests", async () => {
    const ctx = createBaseCtx();
    ctx.auth.getUserId = () => null;

    await expect(
      getHeroHeader(ctx, { timezone: "UTC", locale: "en-US", nowIso: "2026-03-02T00:00:00.000Z" }),
    ).rejects.toThrow("UNAUTHENTICATED");
  });

  test("rejects invalid inputs", async () => {
    const ctx = createBaseCtx();

    await expect(
      getHeroHeader(ctx, { timezone: "Invalid/Zone", locale: "en-US", nowIso: "2026-03-02T00:00:00.000Z" }),
    ).rejects.toThrow("INVALID_ARGUMENT");

    await expect(
      getHeroHeader(ctx, { timezone: "UTC", locale: "en-US", nowIso: "not-an-iso" }),
    ).rejects.toThrow("INVALID_ARGUMENT");
  });

  test("emits audit log on sensitive read", async () => {
    const calls: Array<{ actorUserId: string; resource: string }> = [];
    const ctx = createBaseCtx();
    ctx.audit.logSensitiveRead = async (event) => {
      calls.push({ actorUserId: event.actorUserId, resource: event.resource });
    };

    await getHeroHeader(ctx, { timezone: "UTC", locale: "en-US", nowIso: "2026-03-02T00:00:00.000Z" });

    expect(calls).toEqual([{ actorUserId: "u1", resource: "home.getHeroHeader" }]);
  });

  test("returns contract-shaped response", async () => {
    const ctx = createBaseCtx();
    const response = await getHeroHeader(ctx, {
      timezone: "UTC",
      locale: "en-US",
      nowIso: "2026-03-02T00:00:00.000Z",
    });

    expect(response).toEqual({
      firstName: "Ayush",
      streakCount: expect.any(Number),
      mascotAssetKey: "eczie-calm",
    });
  });

  test("returns empathetic mascot key for flare state", async () => {
    const ctx = createBaseCtx();
    ctx.db.getUserById = async () => ({ userId: "u1", firstName: "Ayush", hasActiveFlareSignal: true });

    const response = await getHeroHeader(ctx, {
      timezone: "UTC",
      locale: "en-US",
      nowIso: "2026-03-02T00:00:00.000Z",
    });

    expect(response.mascotAssetKey).toBe("eczie-empathetic");
  });
});
