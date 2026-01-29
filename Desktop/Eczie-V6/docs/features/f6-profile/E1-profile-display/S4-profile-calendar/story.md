# S4: Profile Calendar

## References
- Feature: F6 - Profile
- Epic: E1 - Profile Display
- PRD Section: 2.8.4

## User Story

As a user, I want to see my symptom calendar on my profile so that I can review my history.

## Acceptance Criteria

- [ ] Display "Your Symptom Calendar" header
- [ ] Display month/year with navigation
- [ ] Display calendar grid with severity indicators
- [ ] Same functionality as Insights calendar

## UX Requirements

- Reuse Month Grid Calendar component from F5
- Consistent styling with Insights calendar

## Non-Functional Requirements

- Same data source as Insights calendar
- Accessible: day states announced

## Dependencies

- Month Grid Calendar component (F5-E1-S5)
- Log data

## Design Notes

This is a reused component from Insights. No additional design needed.
