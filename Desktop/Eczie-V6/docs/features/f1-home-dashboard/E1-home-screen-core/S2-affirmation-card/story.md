# S2: Affirmation Card

## References
- Feature: F1 - Home Dashboard
- Epic: E1 - Home Screen Core
- PRD Section: 2.1.2

## User Story

As a user, I want to see a calming affirmation message so that I feel emotionally supported during my eczema management journey.

## Acceptance Criteria

- [ ] Display affirmation text (e.g., "This flare is temporary, calm is returning.")
- [ ] Display action hint "Tap for more affirmations"
- [ ] Tapping card cycles to next affirmation
- [ ] Card styled as distinct visual element

## UX Requirements

- Affirmation text is prominent and readable
- Tap interaction provides subtle feedback (press state)
- Affirmations rotate through predefined list
- Tone must remain calm and validating (never cheerful during flares)

## Non-Functional Requirements

- Affirmation list stored locally (no network dependency)
- Rotation logic: sequential or random (implementation choice)
- Accessible: card is tappable element with proper role

## Dependencies

- None (self-contained component)

## Design Notes

Check `story-images/` for card styling. If not present, use standard card component from design system.
