# S4: Task List

## References
- Feature: F3 - Routine Tracker
- Epic: E1 - Routine Display
- PRD Section: 2.3.4

## User Story

As a user, I want to see my tasks organized by category so that I can easily find and complete them.

## Acceptance Criteria

- [ ] Display tasks grouped by category: Skincare, Medications, Lifestyle
- [ ] Each category has header label
- [ ] Each task shows: checkbox, icon, title, time/schedule
- [ ] Tapping checkbox toggles completion state
- [ ] Completed tasks show checked state
- [ ] Task order consistent within categories

## UX Requirements

- Categories visually separated
- Checkbox is primary interaction target
- Completed tasks may show strikethrough or muted style
- Icons match task type (sun, moon, pill, water, etc.)

## Non-Functional Requirements

- Toggle persists immediately (optimistic update)
- Offline: queue sync when online
- Accessible: checkbox state announced

## Dependencies

- Task data model
- Progress summary (S3) updates on toggle

## Design Notes

Check `story-images/` for task item layout. Use Task List Item component.
