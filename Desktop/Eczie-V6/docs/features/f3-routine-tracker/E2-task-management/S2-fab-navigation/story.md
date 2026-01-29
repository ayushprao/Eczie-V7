# S2: FAB Navigation

## References
- Feature: F3 - Routine Tracker
- Epic: E2 - Task Management
- PRD Section: 2.3.5

## User Story

As a user, I want a visible add button so that I can quickly create new routine tasks.

## Acceptance Criteria

- [ ] Display FAB with plus (+) icon
- [ ] FAB positioned bottom-right, above safe area
- [ ] Tapping FAB navigates to Add Routine screen
- [ ] FAB remains visible during scroll

## UX Requirements

- FAB uses primaryAction color
- Press state provides visual feedback
- FAB does not overlap bottom navigation

## Non-Functional Requirements

- Accessible: labeled "Add new task"

## Dependencies

- Add Task Form (S1)

## Design Notes

Check `story-images/` for FAB positioning. Use FAB component from design system.
