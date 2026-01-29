# S4: Action Cards

## References
- Feature: F1 - Home Dashboard
- Epic: E1 - Home Screen Core
- PRD Section: 2.1.4

## User Story

As a user, I want clear action cards so that I can quickly navigate to log symptoms or track my routine.

## Acceptance Criteria

- [ ] Display "Complete Entry" card with subtitle "Symptoms & Triggers" and clipboard icon
- [ ] Display "Track Routine" card with subtitle "Skincare & Medications" and checklist icon
- [ ] Tapping "Complete Entry" navigates to Symptom Log screen
- [ ] Tapping "Track Routine" navigates to Routine Tracker screen
- [ ] Cards are visually prominent and tappable

## UX Requirements

- Cards displayed side-by-side (horizontal pair)
- Each card has icon, title, subtitle
- Press state provides visual feedback
- Cards are equal width

## Non-Functional Requirements

- Navigation is instant (no loading state needed)
- Accessible: cards are buttons with descriptive labels

## Dependencies

- Navigation system
- Symptom Log screen (F2)
- Routine Tracker screen (F3)

## Design Notes

Check `story-images/` for card layout. Use Action Card component from design system.
