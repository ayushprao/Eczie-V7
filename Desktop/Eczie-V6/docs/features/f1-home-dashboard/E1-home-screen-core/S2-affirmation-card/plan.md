# Implementation Plan: Affirmation Card

**Branch**: `S2-affirmation-card` | **Date**: 2026-01-29 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `docs/features/f1-home-dashboard/E1-home-screen-core/S2-affirmation-card/spec.md`

## Summary

A self-contained React Native component that displays calming affirmation messages on the Home screen. The card supports tap-to-cycle interaction with sequential rotation, daily-based initial selection, and full accessibility compliance. No backend or network dependencies—all affirmations are bundled locally.

## Technical Context

**Language/Version**: TypeScript (strict) on React Native + Expo  
**Primary Dependencies**: React Native, NativeWind, react-native-reanimated, moti (for subtle press feedback)  
**Storage**: N/A (in-memory state only, no persistence across app restarts)  
**Testing**: Jest + React Native Testing Library  
**Target Platform**: iOS-first, Android supported  
**Project Type**: Mobile (React Native component within existing app)  
**Performance Goals**: <100ms render, <150ms tap response  
**Constraints**: No network dependency, WCAG AA accessibility, reduced-motion support  
**Scale/Scope**: Single component, 10+ static affirmations

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| **I. PHI Safety First** | ✅ PASS | No PHI involved—affirmations are static, non-personal content |
| **II. Speed of Entry Over Polish** | ✅ PASS | Single-tap interaction, no form submission, instant feedback |
| **III. Trust Through Transparency** | ✅ PASS | N/A—no AI-derived content in this component |
| **IV. Emotional Steadiness Over Celebration** | ✅ PASS | Affirmation tone explicitly validated against Design System rules |
| **V. Graceful Degradation** | ✅ PASS | Fallback affirmation defined for empty list edge case |
| **VI. Schema-Driven Contracts** | ✅ PASS | N/A—no API contracts, local data only |
| **VII. Simplicity Over Premature Scale** | ✅ PASS | In-memory state, no persistence, no complex caching |

**Gate Result**: ✅ All principles satisfied. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
docs/features/f1-home-dashboard/E1-home-screen-core/S2-affirmation-card/
├── spec.md              # Feature specification
├── story.md             # User story reference
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (empty for this feature)
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
src/
├── components/
│   └── home/
│       └── AffirmationCard/
│           ├── AffirmationCard.tsx      # Main component
│           ├── AffirmationCard.test.tsx # Unit tests
│           ├── useAffirmation.ts        # Custom hook for state management
│           ├── affirmations.ts          # Static affirmation data
│           ├── types.ts                 # TypeScript interfaces
│           └── index.ts                 # Barrel export
├── screens/
│   └── HomeScreen.tsx                   # Integration point
└── utils/
    └── date.ts                          # Daily rotation helper (if not exists)
```

**Structure Decision**: Component-based structure within existing `src/components/home/` directory, following established patterns (e.g., `GreetingHeader/`).

## Complexity Tracking

> No violations. All Constitution gates pass.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| (none)    | —          | —                                   |
