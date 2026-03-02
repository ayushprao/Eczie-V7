# Quickstart: Implement Hero Header & Greeting

## Goal

Deliver the Home hero header with localized date, personalized greeting, mascot artwork, and conditional streak badge while preserving layout stability.

## Prerequisites

- Node 18+
- React Native + Expo app scaffold under `Frontend/`
- Convex backend functions under `Backend/convex/`
- Authenticated user context wired into Convex client calls

## Implementation Steps

1. **Create frontend hero module**
- Add `Frontend/src/features/home/hero/components/HeroHeader.tsx`.
- Add supporting components (`DateLabel`, `GreetingText`, `StreakBadge`, `HeroSkeleton`).
- Mount mascot from `Frontend/assets/mascot/eczie.png` inside a fixed-size container.

2. **Add formatting helpers**
- Implement `formatHeroDate.ts` using `Intl.DateTimeFormat` + locale-aware uppercase.
- Implement `buildGreeting.ts` that trims `firstName` and applies fallback copy.

3. **Create backend query**
- Add `Backend/convex/home/queries.ts` with `home.getHeroHeader`.
- Enforce authenticated user and explicit `userId` filtering.
- Return `{ firstName, streakCount, mascotAssetKey }` per contract.

4. **Implement streak derivation**
- Add `Backend/convex/home/streak.ts`.
- Compute calendar-day streak using client timezone and clarified break rule.
- Ensure result is integer >= 0.

5. **Wire UI to query**
- Add `useHomeHeroData.ts` hook to call `home.getHeroHeader`.
- Render skeleton placeholder while query resolves.
- Hide badge when `streakCount === 0`.

6. **Apply accessibility + stability checks**
- Keep greeting single-line with tail ellipsis.
- Verify no broken-image icon on mascot failure path.
- Confirm no layout shift in loading and resolved states.

## Validation Checklist

1. **Date & Greeting**
- Simulate locale + fixed date and verify uppercase `WEEKDAY · MONTH DAY` shape.
- Verify `Welcome back, Ayush` for named user.
- Verify `Welcome back` when name is null/empty.

2. **Streak Badge**
- Streak = 8 -> `8 days strong`.
- Streak = 1 -> `1 day strong`.
- Streak = 0 -> no badge rendered.
- Missing today but day not ended -> prior streak persists.

3. **Mascot**
- Asset visible in hero background under normal conditions.
- Failed load path preserves layout and suppresses broken-image artifacts.

4. **Performance + UX**
- Date/greeting visible within 300 ms with warm cache/profile available.
- No visible layout shift during loading transitions.
- All interactive elements remain 44pt minimum and text contrast passes WCAG AA.

## Test Targets

- `HeroHeader.test.tsx`: rendering states + badge visibility
- `formatHeroDate.test.ts`: locale/uppercase behavior
- `buildGreeting.test.ts`: fallback + punctuation safety
- `homeHero.query.test.ts`: streak derivation scenarios and auth scoping
