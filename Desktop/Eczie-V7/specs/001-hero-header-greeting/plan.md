# Implementation Plan: Hero Header & Greeting

**Branch**: `001-hero-header-greeting` | **Date**: 2026-03-02 | **Spec**: `/Users/ayushrao/Desktop/Eczie-V7/specs/001-hero-header-greeting/spec.md`
**Input**: Feature specification from `/specs/001-hero-header-greeting/spec.md`

## Summary

Implement the Home hero header so authenticated users see: (1) a localized uppercase date label, (2) a personalized greeting with safe fallback/truncation behavior, (3) Eczie mascot background artwork, and (4) a streak badge that appears only when streak >= 1. The implementation will use a Convex query to provide user-scoped hero data and a React Native header component that preserves layout stability during loading.

## Technical Context

**Language/Version**: TypeScript (strict), Node 18+, React Native + Expo (EAS)
**Primary Dependencies**: React Native, Expo, Convex client/hooks, zod, zustand (UI state), Intl.DateTimeFormat (built-in)
**Storage**: Convex document database (`users`, `logs`) + bundled mascot asset at `Frontend/assets/mascot/eczie.png`
**Testing**: Jest + React Native Testing Library (component/unit), Convex query unit tests for streak computation, manual simulator validation for acceptance scenarios
**Target Platform**: iOS 15+ (primary), Android 13+ (supported)
**Project Type**: Mobile app (React Native) + Convex backend functions
**Performance Goals**: Date and greeting visible within 300 ms of Home mount when profile data is available; Home hero contributes no measurable layout shift; overall Home render target under 1 s
**Constraints**: Calendar-day streak in user local timezone; hide streak UI at 0; no guilt messaging; 44pt touch targets; WCAG AA contrast; no PHI leakage; no layout shift while loading
**Scale/Scope**: One Home hero module, one Convex query surface, one mascot asset integration, and deterministic formatting rules for all authenticated users

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Research Gate Review

- **I. PHI Safety First**: PASS
  - All data access is user-scoped via authenticated Convex context and explicit `user_id` filtering.
  - Hero output excludes raw notes/photos and only returns first-name + derived streak count.
- **II. Empathy-First UX**: PASS
  - Streak behavior explicitly hides zero-state badge and avoids guilt copy.
  - Greeting fallback copy is neutral and reassuring.
- **III. Speed of Entry**: PASS
  - This feature is read-only and does not add friction to logging workflows.
- **IV. Explainability Over Simplification**: PASS
  - Streak definition is explicit (calendar-day streak, break after full missed day).
- **V. Graceful Degradation**: PASS
  - Header renders with skeleton/placeholder and fallback greeting even if streak query is loading.
  - Mascot load failure keeps stable layout with no broken-image artifact.
- **VI. Accessibility & Visual Consistency**: PASS
  - Layout budget includes fixed hero zones/skeleton placeholders to prevent shift.
  - Text contrast and touch-target standards are required acceptance checks.
- **VII. Simplicity & YAGNI**: PASS
  - No new caching layer, no extra backend service, no unnecessary abstraction.

**Gate Status (Pre-Research)**: PASS

### Post-Design Gate Re-Check

- **I. PHI Safety First**: PASS - Contract restricts response to minimal non-sensitive fields and enforces auth.
- **II. Empathy-First UX**: PASS - Contract + data model codify zero-streak hide behavior and neutral fallback copy.
- **III. Speed of Entry**: PASS - Header work remains lightweight and non-blocking.
- **IV. Explainability Over Simplification**: PASS - Streak rules documented in data model and contract.
- **V. Graceful Degradation**: PASS - Loading and asset-failure behavior captured in quickstart tests.
- **VI. Accessibility & Visual Consistency**: PASS - Skeleton and truncation rules are defined with explicit validation steps.
- **VII. Simplicity & YAGNI**: PASS - Uses existing preferred stack primitives only.

**Gate Status (Post-Design)**: PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-hero-header-greeting/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── home-hero-header.contract.md
└── tasks.md
```

### Source Code (repository root)

```text
Frontend/
├── assets/
│   └── mascot/
│       └── eczie.png
└── src/
    └── features/
        └── home/
            └── hero/
                ├── components/
                │   ├── HeroHeader.tsx
                │   ├── DateLabel.tsx
                │   ├── GreetingText.tsx
                │   ├── StreakBadge.tsx
                │   └── HeroSkeleton.tsx
                ├── hooks/
                │   └── useHomeHeroData.ts
                ├── formatters/
                │   └── formatHeroDate.ts
                ├── selectors/
                │   └── buildGreeting.ts
                └── __tests__/
                    ├── HeroHeader.test.tsx
                    ├── formatHeroDate.test.ts
                    └── buildGreeting.test.ts

Backend/
└── convex/
    ├── home/
    │   ├── queries.ts
    │   └── streak.ts
    ├── schema.ts
    └── __tests__/
        └── homeHero.query.test.ts
```

**Structure Decision**: Use the existing top-level `Frontend` + `Backend` split and implement a mobile + Convex pattern. Frontend owns presentation/formatting; Backend (Convex) owns authenticated data assembly and streak derivation.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
