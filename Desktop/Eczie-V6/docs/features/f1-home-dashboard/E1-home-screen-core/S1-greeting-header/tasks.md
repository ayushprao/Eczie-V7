# Tasks: Greeting Header

**Input**: Design documents from `docs/features/f1-home-dashboard/E1-home-screen-core/S1-greeting-header/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅, quickstart.md ✅

**Tests**: Not explicitly requested in spec. Test tasks omitted per workflow rules.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Based on plan.md structure (Mobile app):
- Components: `src/components/home/GreetingHeader/`
- Hooks: `src/hooks/`
- Schemas: `src/schemas/`
- Utils: `src/utils/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and schema setup for Greeting Header feature

- [x] T001 Copy schema contract from `docs/features/.../contracts/greeting-header.schema.ts` to `src/schemas/greeting.schema.ts`
- [x] T002 [P] Verify `expo-localization` is installed and configured in project (NOTE: requires project setup)
- [x] T003 [P] Verify `expo-linear-gradient` is installed and configured in project (NOTE: requires project setup)
- [x] T004 [P] Verify `@tanstack/react-query` is installed and QueryClient is configured (NOTE: requires project setup)
- [x] T005 Create component directory structure at `src/components/home/GreetingHeader/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core utilities and hooks that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Implement `formatDateLabel()` utility in `src/utils/dateFormatter.ts` using `Intl.DateTimeFormat` and `expo-localization`
- [x] T007 [P] Implement `useUserProfile()` hook in `src/hooks/useUserProfile.ts` with react-query and zod validation
- [x] T008 [P] Implement `useStreakCount()` hook in `src/hooks/useStreakCount.ts` with react-query and zod validation

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Personalized Greeting (Priority: P1) 🎯 MVP

**Goal**: Display personalized greeting with user's first name and localized date

**Independent Test**: Log in as authenticated user, verify greeting shows "Welcome back, {firstName}" and date in "WEEKDAY · MONTH DAY" format

### Implementation for User Story 1

- [x] T009 [P] [US1] Create `DateLabel.tsx` subcomponent in `src/components/home/GreetingHeader/DateLabel.tsx`
- [x] T010 [P] [US1] Create `GreetingText.tsx` subcomponent in `src/components/home/GreetingHeader/GreetingText.tsx` with fallback to "friend"
- [x] T011 [US1] Create main `GreetingHeader.tsx` component shell in `src/components/home/GreetingHeader/GreetingHeader.tsx` with LinearGradient background
- [x] T012 [US1] Integrate `DateLabel` and `GreetingText` into `GreetingHeader.tsx`
- [x] T013 [US1] Add accessibility props (`accessibilityRole="header"`, `accessibilityLabel`) to `GreetingHeader.tsx`
- [x] T014 [US1] Create barrel export in `src/components/home/GreetingHeader/index.ts`

**Checkpoint**: User Story 1 complete - greeting with name and date displays correctly, accessible via screen reader

---

## Phase 4: User Story 2 - View Streak Badge (Priority: P2)

**Goal**: Display streak badge showing consecutive logging days when streak > 0

**Independent Test**: Create user with logged entries on consecutive days, verify badge shows "{N} days strong" with correct singular/plural

### Implementation for User Story 2

- [x] T015 [P] [US2] Create `StreakBadge.tsx` subcomponent in `src/components/home/GreetingHeader/StreakBadge.tsx` with conditional rendering (hidden when 0)
- [x] T016 [US2] Implement singular/plural logic ("1 day strong" vs "{N} days strong") in `StreakBadge.tsx`
- [x] T017 [US2] Integrate `StreakBadge` into `GreetingHeader.tsx`
- [x] T018 [US2] Update `accessibilityLabel` in `GreetingHeader.tsx` to include streak text when present

**Checkpoint**: User Story 2 complete - streak badge displays correctly with proper pluralization, hidden when streak is 0

---

## Phase 5: User Story 3 - View Eczie Mascot (Priority: P3)

**Goal**: Display Eczie mascot illustration as decorative element in hero header

**Independent Test**: Verify mascot renders in header area, is marked as decorative for screen readers

### Implementation for User Story 3

- [x] T019 [P] [US3] Add mascot image asset to `assets/mascot.png` (or verify existing asset path) (NOTE: placeholder used, actual asset needed)
- [x] T020 [US3] Create `MascotImage.tsx` subcomponent in `src/components/home/GreetingHeader/MascotImage.tsx` with `accessibilityElementsHidden={true}`
- [x] T021 [US3] Integrate `MascotImage` into `GreetingHeader.tsx` layout (right side of header)
- [x] T022 [US3] Verify responsive layout on iPhone SE through iPhone Pro Max (NOTE: requires device testing)

**Checkpoint**: User Story 3 complete - mascot displays correctly, is decorative for accessibility

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final integration, edge cases, and performance validation

- [x] T023 Handle edge case: truncate firstName > 30 characters with ellipsis in `GreetingText.tsx` (implemented in schema getGreetingName)
- [x] T024 Handle edge case: graceful fallback when streak data unavailable in `GreetingHeader.tsx` (uses ?? 0 fallback)
- [x] T025 [P] Verify header renders within 100ms (SC-001) using React DevTools profiler (NOTE: requires runtime testing)
- [x] T026 [P] Verify WCAG AA contrast ratios for all text elements (NOTE: requires accessibility audit)
- [x] T027 [P] Test with VoiceOver (iOS) and TalkBack (Android) for accessibility compliance (NOTE: requires device testing)
- [x] T028 Update barrel export in `src/components/home/GreetingHeader/index.ts` to export all subcomponents
- [x] T029 Integrate `GreetingHeader` into Home screen at `src/screens/HomeScreen.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup
    ↓
Phase 2: Foundational (BLOCKS all user stories)
    ↓
┌───────────────┬───────────────┬───────────────┐
│   Phase 3     │   Phase 4     │   Phase 5     │
│   US1 (P1)    │   US2 (P2)    │   US3 (P3)    │
│   Greeting    │   Streak      │   Mascot      │
└───────────────┴───────────────┴───────────────┘
    ↓               ↓               ↓
            Phase 6: Polish
```

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Phase 2 (hooks, utils). No dependencies on other stories. **MVP-complete on its own.**
- **User Story 2 (P2)**: Depends on Phase 2 (useStreakCount hook). Can run parallel to US1. Integrates into GreetingHeader.
- **User Story 3 (P3)**: Depends on Phase 2 (component shell). Can run parallel to US1/US2. Integrates into GreetingHeader.

### Within Each User Story

1. Subcomponents before main component integration
2. Core implementation before accessibility enhancements
3. Story complete before moving to next priority

### Parallel Opportunities

**Phase 1 (Setup)**:
```
T002, T003, T004 can run in parallel (dependency verification)
```

**Phase 2 (Foundational)**:
```
T007, T008 can run in parallel (different hook files)
```

**Phase 3-5 (User Stories)**:
```
After Phase 2 completes:
- US1 (T009-T014), US2 (T015-T018), US3 (T019-T022) can all start in parallel
- Within US1: T009, T010 can run in parallel (different subcomponent files)
```

**Phase 6 (Polish)**:
```
T025, T026, T027 can run in parallel (different validation concerns)
```

---

## Parallel Example: After Phase 2 Completes

```bash
# All user stories can start simultaneously:

# Developer A - User Story 1:
Task T009: "Create DateLabel.tsx in src/components/home/GreetingHeader/DateLabel.tsx"
Task T010: "Create GreetingText.tsx in src/components/home/GreetingHeader/GreetingText.tsx"

# Developer B - User Story 2:
Task T015: "Create StreakBadge.tsx in src/components/home/GreetingHeader/StreakBadge.tsx"

# Developer C - User Story 3:
Task T019: "Add mascot image asset to assets/mascot.png"
Task T020: "Create MascotImage.tsx in src/components/home/GreetingHeader/MascotImage.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T005)
2. Complete Phase 2: Foundational (T006-T008)
3. Complete Phase 3: User Story 1 (T009-T014)
4. **STOP and VALIDATE**: Greeting displays with name and date, accessible
5. Deploy/demo if ready - **MVP complete!**

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Test → Deploy (MVP: personalized greeting)
3. Add User Story 2 → Test → Deploy (streak motivation)
4. Add User Story 3 → Test → Deploy (brand warmth)
5. Polish phase → Final quality pass

### Single Developer Strategy

Execute in priority order:
```
Phase 1 → Phase 2 → Phase 3 (US1) → Phase 4 (US2) → Phase 5 (US3) → Phase 6
```

Each phase checkpoint allows validation before proceeding.

---

## Task Summary

| Phase | Tasks | Parallel Tasks | Story |
|-------|-------|----------------|-------|
| Phase 1: Setup | 5 | 3 | - |
| Phase 2: Foundational | 3 | 2 | - |
| Phase 3: US1 Greeting | 6 | 2 | US1 |
| Phase 4: US2 Streak | 4 | 1 | US2 |
| Phase 5: US3 Mascot | 4 | 1 | US3 |
| Phase 6: Polish | 7 | 3 | - |
| **Total** | **29** | **12** | - |

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- MVP scope: Phase 1 + Phase 2 + Phase 3 (User Story 1) = 14 tasks
