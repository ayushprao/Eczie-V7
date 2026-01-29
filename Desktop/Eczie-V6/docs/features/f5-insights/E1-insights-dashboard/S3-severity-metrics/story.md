# S3: Severity Metrics

## References
- Feature: F5 - Insights
- Epic: E1 - Insights Dashboard
- PRD Section: 2.6.3 - 2.6.4

## User Story

As a user, I want to see my average severity and symptom breakdown so that I understand my overall condition.

## Acceptance Criteria

- [ ] Display "Average Symptom Severity" card with:
  - Chart icon
  - Score (e.g., "5.7")
  - Scale indicator ("/ 10")
  - Trend indicator (e.g., "↑ 0.3" with color)
- [ ] Display "Symptom Trends" section with:
  - Itchiness bar with value (e.g., "6.2 / 10")
  - Redness bar with value
  - Dryness bar with value
- [ ] Trend arrow green if improving (lower), red if worsening

## UX Requirements

- Average severity card is prominent
- Trend bars use consistent color
- Values clearly readable

## Non-Functional Requirements

- Calculated from last 7 days of logs
- Trend compared to previous 7 days
- Accessible: values announced with context

## Dependencies

- Log data aggregation

## Design Notes

Check `story-images/` for metric layout.
