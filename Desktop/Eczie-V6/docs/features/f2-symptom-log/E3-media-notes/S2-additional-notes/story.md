# S2: Additional Notes

## References
- Feature: F2 - Symptom Log
- Epic: E3 - Media & Notes
- PRD Section: 2.2.8

## User Story

As a user, I want to add free-text notes so that I can record context that doesn't fit into structured fields.

## Acceptance Criteria

- [ ] Display "Additional Notes" section header
- [ ] Display multi-line text input
- [ ] Display placeholder "e.g., Noticed itching after my evening workout..."
- [ ] Text input expands as user types
- [ ] Notes are optional (can save without)

## UX Requirements

- Minimum 3 visible lines
- Auto-expand up to 6 lines, then scroll
- Soft keyboard does not obscure input
- Character count not displayed (no limit enforced in UI)

## Non-Functional Requirements

- Max 1000 characters (server-side validation)
- Accessible: proper label association

## Dependencies

- None

## Design Notes

Check `story-images/` for input styling. Use Text Area component from design system.
