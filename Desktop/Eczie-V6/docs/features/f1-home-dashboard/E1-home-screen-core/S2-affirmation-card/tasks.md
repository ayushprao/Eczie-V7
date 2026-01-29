# Tasks: Affirmation Card

**Input**: Design documents from `docs/features/f1-home-dashboard/E1-home-screen-core/S2-affirmation-card/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, quickstart.md ✅

**Tests**: No tests explicitly requested in the feature specification. Test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Mobile (React Native)**: `src/components/`, `src/screens/` at repository root
- Component structure follows existing patterns (e.g., `src/components/home/GreetingHeader/`)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create component directory structure

- [x] T001 Create AffirmationCard directory at `src/components/home/AffirmationCard/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types and data that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 [P] Create TypeScript interfaces in `src/components/home/AffirmationCard/types.ts`
- [x] T003 [P] Create static affirmation data in `src/components/home/AffirmationCard/affirmations.ts`
- [x] T004 Create barrel export in `src/components/home/AffirmationCard/index.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Daily Affirmation (Priority: P1) 🎯 MVP

**Goal**: Display a calming affirmation message on the Home screen with daily rotation for initial selection

**Independent Test**: Open the Home screen and verify an affirmation card is displayed with appropriate styling, text, and "Tap for more affirmations" hint

### Implementation for User Story 1

- [x] T005 [US1] Create useAffirmation hook with daily rotation logic in `src/components/home/AffirmationCard/useAffirmation.ts`
- [x] T006 [US1] Create AffirmationCard component with static display in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T007 [US1] Style card with NativeWind (bg, padding, rounded corners, text styles) in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T008 [US1] Add "Tap for more affirmations" hint text in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T009 [US1] Integrate AffirmationCard into HomeScreen between GreetingHeader and SkinStatusSelector in `src/screens/HomeScreen.tsx`

**Checkpoint**: User Story 1 complete - card displays with daily-selected affirmation

---

## Phase 4: User Story 2 - Cycle Through Affirmations (Priority: P2)

**Goal**: Enable tap-to-cycle interaction with sequential rotation and visual feedback

**Independent Test**: Tap the affirmation card multiple times and verify different messages appear with subtle press feedback

### Implementation for User Story 2

- [x] T010 [US2] Add cycleNext function with sequential rotation to useAffirmation hook in `src/components/home/AffirmationCard/useAffirmation.ts`
- [x] T011 [US2] Add tap debounce (300ms) using useRef in `src/components/home/AffirmationCard/useAffirmation.ts`
- [x] T012 [US2] Replace View with MotiPressable for press feedback in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T013 [US2] Add scale animation (0.98) with reduced-motion support in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T014 [US2] Connect onPress to cycleNext handler in `src/components/home/AffirmationCard/AffirmationCard.tsx`

**Checkpoint**: User Story 2 complete - tapping cycles through affirmations with feedback

---

## Phase 5: User Story 3 - Accessible Affirmation Interaction (Priority: P3)

**Goal**: Ensure the card is fully accessible for screen readers and respects reduced-motion preferences

**Independent Test**: Use VoiceOver/TalkBack to verify the card is announced correctly as a button with the affirmation text

### Implementation for User Story 3

- [x] T015 [US3] Add accessibilityRole="button" to MotiPressable in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T016 [US3] Add dynamic accessibilityLabel with affirmation text in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T017 [US3] Add accessibilityHint explaining tap action in `src/components/home/AffirmationCard/AffirmationCard.tsx`
- [x] T018 [US3] Verify useReducedMotion integration disables animation when preference is set in `src/components/home/AffirmationCard/AffirmationCard.tsx`

**Checkpoint**: User Story 3 complete - card is fully accessible

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup

- [x] T019 Update barrel export with all exports in `src/components/home/AffirmationCard/index.ts`
- [x] T020 Verify all 10 affirmations pass tone validation (no exclamation marks, calm tone)
- [x] T021 Run quickstart.md verification checklist manually
- [x] T022 Verify card renders within 100ms performance target

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on US1 (needs base component to add interaction)
- **User Story 3 (P3)**: Depends on US2 (needs MotiPressable to add accessibility props)

### Within Each User Story

- Hook logic before component implementation
- Component structure before styling
- Core functionality before integration

### Parallel Opportunities

- T002 and T003 can run in parallel (different files)
- Within Phase 2, all [P] tasks can run in parallel

---

## Parallel Example: Foundational Phase

```bash
# Launch all foundational tasks together:
Task: "Create TypeScript interfaces in src/components/home/AffirmationCard/types.ts"
Task: "Create static affirmation data in src/components/home/AffirmationCard/affirmations.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (1 task)
2. Complete Phase 2: Foundational (3 tasks)
3. Complete Phase 3: User Story 1 (5 tasks)
4. **STOP and VALIDATE**: Card displays with daily affirmation
5. Deploy/demo if ready - **9 tasks for MVP**

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready (4 tasks)
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Tap cycling works
4. Add User Story 3 → Test independently → Fully accessible
5. Polish → Final validation

### Full Implementation

Total: **22 tasks** across 6 phases

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- No test tasks included (not explicitly requested in spec)
- All tasks reference exact file paths per plan.md structure
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
