# S1: Log Header

## References
- Feature: F2 - Symptom Log
- Epic: E1 - Symptom Entry
- PRD Section: 2.2.1

## User Story

As a user, I want to see a clear header with navigation and date selection so that I can log symptoms for the correct day.

## Acceptance Criteria

- [ ] Display back button (left chevron) that navigates to Home
- [ ] Display title "Symptom Log"
- [ ] Display date selector showing "Today" by default
- [ ] Tapping date selector opens date picker
- [ ] Date picker allows selection of past dates (up to 30 days)
- [ ] Future dates are disabled in picker
- [ ] Selected date updates the selector display

## UX Requirements

- Header is fixed at top
- Date selector styled as dropdown/pill
- Date picker uses native or custom modal
- Selected date format: "Today", "Yesterday", or "MMM DD"

## Non-Functional Requirements

- Date selection does not trigger save
- If log exists for selected date, load existing data
- Accessible: back button and date selector properly labeled

## Dependencies

- Navigation system
- Daily log data model

## Design Notes

Check `story-images/` for header layout. Date picker UI is a design gap - implement standard modal picker.
