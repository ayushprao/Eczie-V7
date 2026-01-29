# S5: Symptom Calendar

## References
- Feature: F5 - Insights
- Epic: E1 - Insights Dashboard
- PRD Section: 2.6.6

## User Story

As a user, I want to see a calendar view of my symptoms so that I can identify patterns over time.

## Acceptance Criteria

- [ ] Display header "Your Symptom Calendar"
- [ ] Display month/year with left/right navigation arrows
- [ ] Display calendar grid with days
- [ ] Days with logs show severity emoji (green/yellow/red face)
- [ ] Days without logs show empty
- [ ] Current day highlighted
- [ ] Future days muted
- [ ] Tapping a logged day navigates to log detail

## UX Requirements

- Calendar fits on screen without horizontal scroll
- Emoji icons are clear at small size
- Navigation arrows are tappable
- Severity colors: severityLow, severityModerate, severityHigh

## Non-Functional Requirements

- Load current month by default
- Navigate to past months (up to 12 months)
- Future months not navigable
- Accessible: day states announced

## Dependencies

- Log data with dates and severity
- Log detail view (design gap - read-only view)

## Design Notes

Check `story-images/` for calendar styling. Use Month Grid Calendar component.
