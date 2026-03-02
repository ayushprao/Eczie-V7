# Tasks: Hero Header & Greeting

**Input**: Design documents from `/Users/ayushrao/Desktop/Eczie-V7/specs/001-hero-header-greeting/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Include unit/component/query tests because the feature spec defines independent test criteria and acceptance scenarios per user story.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on incomplete tasks)
- **[Story]**: Present only for user-story phases (`[US1]`, `[US2]`, `[US3]`)
- Each task includes an exact file path.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the feature module skeleton and testing directories.

- [X] T001 Create hero feature directories under `Frontend/src/features/home/hero/` and `Backend/convex/home/`
- [X] T002 Create frontend hero module index in `Frontend/src/features/home/hero/index.ts`
- [X] T003 [P] Create hero test scaffolds in `Frontend/src/features/home/hero/__tests__/` and `Backend/convex/__tests__/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared contract plumbing and base render/loading structure required by all stories.

**⚠️ CRITICAL**: No user story work should start before this phase completes.

- [X] T004 Implement authenticated query skeleton `home.getHeroHeader` with typed input/output in `Backend/convex/home/queries.ts`
- [X] T005 [P] Create frontend data hook skeleton for hero query in `Frontend/src/features/home/hero/hooks/useHomeHeroData.ts`
- [X] T006 [P] Create base hero layout container with fixed slots in `Frontend/src/features/home/hero/components/HeroHeader.tsx`
- [X] T007 [P] Implement loading placeholder that preserves badge footprint in `Frontend/src/features/home/hero/components/HeroSkeleton.tsx`

**Checkpoint**: Shared foundation complete; user stories can proceed in priority order.

---

## Phase 3: User Story 1 - Date & Greeting Display (Priority: P1) 🎯 MVP

**Goal**: Render localized uppercase date and personalized greeting with fallback and truncation behavior.

**Independent Test**: Load Home while authenticated and verify date label + greeting render correctly for named and unnamed users, including date rollover after midnight on resume.

### Tests for User Story 1

- [X] T008 [P] [US1] Add unit tests for localized uppercase date formatting in `Frontend/src/features/home/hero/__tests__/formatHeroDate.test.ts`
- [X] T009 [P] [US1] Add unit tests for greeting fallback logic in `Frontend/src/features/home/hero/__tests__/buildGreeting.test.ts`
- [X] T010 [US1] Add component tests for date/greeting rendering and no-dangling-comma behavior in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`
- [X] T011 [P] [US1] Add rollover test for date update after midnight on app resume in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`

### Implementation for User Story 1

- [X] T012 [P] [US1] Implement locale-aware date formatter (`WEEKDAY · MONTH DAY`) in `Frontend/src/features/home/hero/formatters/formatHeroDate.ts`
- [X] T013 [P] [US1] Implement greeting builder with trimmed-name fallback in `Frontend/src/features/home/hero/selectors/buildGreeting.ts`
- [X] T014 [US1] Implement date label presenter in `Frontend/src/features/home/hero/components/DateLabel.tsx`
- [X] T015 [US1] Implement greeting text presenter with single-line ellipsis in `Frontend/src/features/home/hero/components/GreetingText.tsx`
- [X] T016 [US1] Extend hero query to return authenticated user first name in `Backend/convex/home/queries.ts`
- [X] T017 [US1] Wire date/greeting derivation into hero data hook in `Frontend/src/features/home/hero/hooks/useHomeHeroData.ts`
- [X] T018 [US1] Implement app foreground/date-boundary refresh trigger in `Frontend/src/features/home/hero/hooks/useHomeHeroData.ts`
- [X] T019 [US1] Integrate date and greeting components into header composition in `Frontend/src/features/home/hero/components/HeroHeader.tsx`

**Checkpoint**: User Story 1 is independently functional and testable.

---

## Phase 4: User Story 2 - Streak Badge Pill (Priority: P2)

**Goal**: Show motivational streak badge when streak >= 1 and hide badge entirely at streak 0, with correct grammar and loading stability.

**Independent Test**: Verify 0/1/7/30+ streak behavior and grace-period rule when today is not yet logged.

### Tests for User Story 2

- [X] T020 [P] [US2] Add streak algorithm unit tests for contiguous-day and missed-day edges in `Backend/convex/__tests__/homeHero.query.test.ts`
- [X] T021 [US2] Add component tests for badge visibility, singular/plural copy, and loading placeholder in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`
- [X] T022 [P] [US2] Add audit-log verification test for sensitive read path in `Backend/convex/__tests__/homeHero.contract.test.ts`

### Implementation for User Story 2

- [X] T023 [P] [US2] Implement calendar-day streak derivation utility in `Backend/convex/home/streak.ts`
- [X] T024 [US2] Integrate streak utility and timezone-aware inputs into hero query in `Backend/convex/home/queries.ts`
- [X] T025 [US2] Add audit-log emission on hero sensitive read in `Backend/convex/home/queries.ts`
- [X] T026 [US2] Implement streak badge component with singular/plural label rules in `Frontend/src/features/home/hero/components/StreakBadge.tsx`
- [X] T027 [US2] Add streak state mapping (`streakLabel` or hidden) in `Frontend/src/features/home/hero/hooks/useHomeHeroData.ts`
- [X] T028 [US2] Wire streak badge and skeleton slot behavior into header layout in `Frontend/src/features/home/hero/components/HeroHeader.tsx`

**Checkpoint**: User Story 2 is independently functional and testable.

---

## Phase 5: User Story 3 - Mascot Illustration (Priority: P3)

**Goal**: Render Eczie mascot in hero background with graceful failure handling, no layout shift, and context-based calm/empathetic variants.

**Independent Test**: Verify mascot appears in hero area, load failure keeps layout intact with no broken-image icon, and flare context selects empathetic variant.

### Tests for User Story 3

- [X] T029 [US3] Add component tests for mascot render and failure fallback behavior in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`
- [X] T030 [P] [US3] Add component tests for calm vs empathetic mascot state selection in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`

### Implementation for User Story 3

- [X] T031 [P] [US3] Add mascot asset key map (`eczie-calm`, `eczie-empathetic`) in `Frontend/src/features/home/hero/constants/mascotAssetMap.ts`
- [X] T032 [US3] Return context-aware `mascotAssetKey` from hero query response in `Backend/convex/home/queries.ts`
- [X] T033 [US3] Resolve mascot asset variants from query output in `Frontend/src/features/home/hero/hooks/useHomeHeroData.ts`
- [X] T034 [US3] Implement mascot background image rendering and onError fallback in `Frontend/src/features/home/hero/components/HeroHeader.tsx`

**Checkpoint**: User Story 3 is independently functional and testable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality checks across all stories.

- [X] T035 [P] Add consolidated contract coverage for auth/input/error branches in `Backend/convex/__tests__/homeHero.contract.test.ts`
- [X] T036 [P] Add explicit WCAG AA contrast assertions for hero text tokens in `Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx`
- [X] T037 [P] Add render-time measurement test/benchmark for date+greeting <=300ms in `Frontend/src/features/home/hero/__tests__/HeroHeader.performance.test.tsx`
- [X] T038 Validate quickstart acceptance checklist results in `specs/001-hero-header-greeting/quickstart.md`
- [X] T039 Run requirement checklist pass update in `specs/001-hero-header-greeting/checklists/requirements.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies.
- **Phase 2 (Foundational)**: Depends on Phase 1; blocks all user stories.
- **Phase 3 (US1)**: Depends on Phase 2; MVP slice.
- **Phase 4 (US2)**: Depends on Phase 2 and can follow US1 for incremental delivery.
- **Phase 5 (US3)**: Depends on Phase 2 and can follow US1/US2 for incremental delivery.
- **Phase 6 (Polish)**: Depends on completion of selected user stories.

### User Story Dependencies

- **US1 (P1)**: No dependency on other stories after foundational tasks.
- **US2 (P2)**: Depends on foundational query/hook shell; independent of mascot work.
- **US3 (P3)**: Depends on foundational header/hook shell; independent of streak algorithm internals.

### Suggested Completion Order

- **MVP**: Phase 1 -> Phase 2 -> Phase 3 (US1)
- **Incremental**: Add Phase 4 (US2) -> Add Phase 5 (US3) -> Phase 6

---

## Parallel Opportunities

- **Setup**: T003 can run alongside T001-T002.
- **Foundational**: T005, T006, and T007 can run in parallel after T004 starts.
- **US1**: T008+T009+T011 (tests) and T012+T013 (utilities) can run in parallel.
- **US2**: T020, T022, and T023 can run in parallel, then converge in T024.
- **US3**: T030 and T031 can run in parallel.
- **Polish**: T035, T036, and T037 can run in parallel.

### Parallel Example: User Story 1

```bash
Task: "T008 [US1] Add unit tests for localized uppercase date formatting in Frontend/src/features/home/hero/__tests__/formatHeroDate.test.ts"
Task: "T009 [US1] Add unit tests for greeting fallback logic in Frontend/src/features/home/hero/__tests__/buildGreeting.test.ts"
Task: "T011 [US1] Add rollover test for date update after midnight on app resume in Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx"
Task: "T012 [US1] Implement locale-aware date formatter in Frontend/src/features/home/hero/formatters/formatHeroDate.ts"
```

### Parallel Example: User Story 2

```bash
Task: "T020 [US2] Add streak algorithm unit tests in Backend/convex/__tests__/homeHero.query.test.ts"
Task: "T022 [US2] Add audit-log verification test in Backend/convex/__tests__/homeHero.contract.test.ts"
Task: "T023 [US2] Implement calendar-day streak derivation utility in Backend/convex/home/streak.ts"
```

### Parallel Example: User Story 3

```bash
Task: "T030 [US3] Add mascot state-selection tests in Frontend/src/features/home/hero/__tests__/HeroHeader.test.tsx"
Task: "T031 [US3] Add mascot asset key map in Frontend/src/features/home/hero/constants/mascotAssetMap.ts"
```

---

## Implementation Strategy

### MVP First (US1)

1. Complete Phase 1 (Setup).
2. Complete Phase 2 (Foundational).
3. Complete Phase 3 (US1).
4. Validate US1 independently against acceptance scenarios.

### Incremental Delivery

1. Ship MVP (US1) once independent tests pass.
2. Add US2 and validate streak behaviors plus audit logging.
3. Add US3 and validate mascot resilience plus state variants.
4. Finish with Phase 6 cross-cutting quality tasks.

### Team Parallelization

1. One engineer handles backend query/streak/audit tasks (`Backend/convex/home/*`).
2. One engineer handles hero presentation tasks (`Frontend/src/features/home/hero/components/*`).
3. One engineer handles formatter/selector/tests (`Frontend/src/features/home/hero/{formatters,selectors,__tests__}/*`).
