# Phase 0 Research: Hero Header & Greeting

## Decision 1: Date Label Localization and Uppercase Strategy

- **Decision**: Use `Intl.DateTimeFormat` with device locale for weekday/month names, compose `WEEKDAY · MONTH DAY`, then apply locale-aware uppercase (`toLocaleUpperCase(locale)`).
- **Rationale**: Meets FR-001 and edge-case requirements without adding a third-party date dependency. Keeps formatting deterministic and aligns with device language.
- **Alternatives considered**:
  - Hard-coded English format strings: rejected because it breaks locale expectations.
  - `dayjs`/`moment` style dependency: rejected due to extra dependency and unnecessary complexity for one format.

## Decision 2: Source of Hero Data

- **Decision**: Add a single authenticated Convex query (`home.getHeroHeader`) that returns `firstName`, `streakCount`, and server-safe defaults; frontend handles final presentational formatting/truncation.
- **Rationale**: Keeps user isolation and streak derivation centralized in backend logic while allowing locale-specific formatting in client runtime.
- **Alternatives considered**:
  - Multiple client calls (profile + logs): rejected due to higher latency and duplicated streak logic.
  - Full formatting on backend: rejected because backend locale may diverge from device locale.

## Decision 3: Streak Computation Rule Implementation

- **Decision**: Implement calendar-day streak over user-local day boundaries where each day with >=1 saved log counts once. If today has no log yet, streak remains intact until local day end; streak breaks only after one full missed day.
- **Rationale**: Directly matches clarified behavior and FR-005 while preserving empathy-first reinforcement.
- **Alternatives considered**:
  - 24-hour rolling window: rejected because it conflicts with clarified calendar-day definition.
  - Immediate break when today is missing: rejected because it violates acceptance scenario 2.

## Decision 4: Zero-Streak and Loading UX

- **Decision**: Return `streakCount` as integer; UI renders badge only when `streakCount >= 1`. During loading, reserve a fixed badge slot skeleton to avoid layout shift.
- **Rationale**: Satisfies FR-006 and FR-008 plus Constitution sections II and VI.
- **Alternatives considered**:
  - Show "0 days strong": rejected for guilt-inducing behavior.
  - Remove badge area entirely while loading: rejected because it introduces layout shift.

## Decision 5: Greeting Fallback and Truncation

- **Decision**: Build greeting as `Welcome back, {firstName}` when trimmed `firstName` is present; otherwise `Welcome back`. Render as one line with tail ellipsis.
- **Rationale**: Implements FR-002/FR-003/FR-003a exactly and prevents broken punctuation.
- **Alternatives considered**:
  - Multi-line wrapping for long names: rejected because requirement enforces single-line truncation.
  - Placeholder name (`there`): rejected because it alters requested copy.

## Decision 6: Mascot Asset Failure Handling

- **Decision**: Use bundled mascot image (`Frontend/assets/mascot/eczie.png`) with fixed container dimensions and graceful hide-on-error behavior (no broken-image glyph, no reflow).
- **Rationale**: Meets FR-007 and mascot-failure acceptance scenario while preserving visual stability.
- **Alternatives considered**:
  - Remote mascot fetch: rejected due to unnecessary network dependency.
  - Collapsing image container on error: rejected because it causes layout movement.

## Decision 7: Test Strategy

- **Decision**: Use unit tests for date/greeting formatters, component tests for conditional badge and skeleton behavior, and backend unit tests for streak derivation edge cases.
- **Rationale**: Covers highest-risk logic boundaries with fast feedback and maps directly to acceptance scenarios.
- **Alternatives considered**:
  - Manual-only validation: rejected due to regression risk.
  - E2E-only testing: rejected as too slow and brittle for formatting logic.

## Clarification Resolution Summary

All technical-context unknowns are resolved for planning:

- Testing stack: resolved to Jest + React Native Testing Library + Convex query unit tests.
- Date localization strategy: resolved to built-in `Intl` APIs.
- Streak data contract: resolved to one backend query with integer `streakCount`.
- Loading/no-shift behavior: resolved to fixed-size skeleton placeholder.
