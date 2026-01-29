# S3: Trigger Selection

## References
- Feature: F2 - Symptom Log
- Epic: E2 - Factors & Triggers
- PRD Section: 2.2.6

## User Story

As a user, I want to select potential triggers I encountered so that the app can correlate triggers with my symptoms over time.

## Acceptance Criteria

- [ ] Display "Possible Triggers" section header
- [ ] Display "Environment" subsection with chips: Heat, Dust, Pollen, Sweat
- [ ] Display "Food and Drink" subsection with chips: Dairy, Alcohol, Sugar
- [ ] Display "Personal and Products" subsection with chips: Stress, New Product, Exercise
- [ ] Display "+ Add Custom" action chip in Personal section
- [ ] Multi-select allowed within and across categories
- [ ] Custom triggers can be added via text input

## UX Requirements

- Categories visually separated
- Chips wrap within each category
- Custom trigger input: max 30 characters

## Non-Functional Requirements

- Custom triggers saved to user's trigger library
- Accessible: grouped by category for screen readers

## Dependencies

- None

## Design Notes

Check `story-images/` for category layout. Use Toggle Chip component.
