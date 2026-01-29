# Implementation Plan: Greeting Header

**Branch**: `f1-e1-s1-greeting-header` | **Date**: 2026-01-29 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `docs/features/f1-home-dashboard/E1-home-screen-core/S1-greeting-header/spec.md`

## Summary

Implement the Greeting Header component for the Home screen, displaying a personalized greeting with the user's first name, localized date, streak badge (when applicable), and Eczie mascot illustration. The component must render within 100ms, fetch data from local cache without blocking, and meet WCAG AA accessibility requirements.

## Technical Context

**Language/Version**: TypeScript (strict) on React Native + Expo  
**Primary Dependencies**: React Native, Expo, NativeWind, Zustand, @tanstack/react-query, react-native-reanimated  
**Storage**: Supabase Postgres (user profile), Local storage via expo-secure-store (streak cache)  
**Testing**: Jest + React Native Testing Library  
**Target Platform**: iOS-first (iPhone SE through iPhone Pro Max), Android supported  
**Project Type**: Mobile  
**Performance Goals**: Header renders within 100ms of Home screen load  
**Constraints**: No blocking network calls; data from local cache; WCAG AA compliance  
**Scale/Scope**: Single component within Home screen; 3 data sources (profile, streak, date)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. PHI Safety First | ✅ PASS | No PHI in this component (first name is not PHI); data from local cache only |
| II. Speed of Entry Over Polish | ✅ PASS | Header is display-only, no user input; renders from cache |
| III. Trust Through Transparency | ✅ PASS | No AI-derived information in this component |
| IV. Emotional Steadiness Over Celebration | ✅ PASS | Streak messaging uses "X days strong" (calm), not achievement language |
| V. Graceful Degradation | ✅ PASS | Fallbacks defined: "Welcome back, friend" for missing name; hide badge if streak unavailable |
| VI. Schema-Driven Contracts | ✅ PASS | Will use zod schemas for profile and streak data |
| VII. Simplicity Over Premature Scale | ✅ PASS | Simple component with local cache reads; no complex state management |

**Quality Gates**:
- [x] PHI Safety: No PHI in component; first name is user-provided display data
- [x] Schema Validation: Profile and streak data validated via zod
- [x] RLS Tests: N/A (read-only from existing cached data)
- [x] Accessibility: Screen reader announcement, WCAG AA contrast, proper semantic markup
- [x] Offline Behavior: Renders from local cache; graceful fallbacks defined
- [x] AI Language: N/A (no AI features in this component)

## Project Structure

### Documentation (this feature)

```text
docs/features/f1-home-dashboard/E1-home-screen-core/S1-greeting-header/
├── story.md             # User story and acceptance criteria
├── spec.md              # Feature specification (clarified)
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── greeting-header.schema.ts
├── checklists/
│   └── requirements.md  # Quality checklist
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── home/
│       └── GreetingHeader/
│           ├── GreetingHeader.tsx       # Main component
│           ├── GreetingHeader.test.tsx  # Unit tests
│           ├── DateLabel.tsx            # Date display subcomponent
│           ├── GreetingText.tsx         # Greeting text subcomponent
│           ├── StreakBadge.tsx          # Streak badge subcomponent
│           ├── MascotImage.tsx          # Mascot illustration subcomponent
│           └── index.ts                 # Barrel export
├── hooks/
│   ├── useUserProfile.ts                # Hook to fetch cached profile
│   └── useStreakCount.ts                # Hook to fetch cached streak
├── schemas/
│   └── greeting.schema.ts               # Zod schemas for profile/streak
└── utils/
    └── dateFormatter.ts                 # Localized date formatting utility

tests/
├── unit/
│   └── components/
│       └── GreetingHeader.test.tsx
└── integration/
    └── home/
        └── GreetingHeader.integration.test.tsx
```

**Structure Decision**: Mobile app structure with feature-based component organization. The GreetingHeader is a compound component with subcomponents for each visual element (date, greeting, streak, mascot). Hooks abstract data fetching from local cache. Schemas define the data contracts.

## Complexity Tracking

> No violations. All Constitution principles pass.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
