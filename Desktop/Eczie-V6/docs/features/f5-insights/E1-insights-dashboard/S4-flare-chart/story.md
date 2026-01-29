# S4: Flare Chart

## References
- Feature: F5 - Insights
- Epic: E1 - Insights Dashboard
- PRD Section: 2.6.5

## User Story

As a user, I want to see a chart of my flare severity so that I can visualize trends over the week.

## Acceptance Criteria

- [ ] Display header "Flare Severity — Last 7 Days"
- [ ] Display line chart with:
  - Y-axis: 0-10 scale
  - X-axis: Days of week (Su, Mo, Tu, We, Th, Fr, Sa)
  - Line showing severity per day
- [ ] Days without logs show gap or zero
- [ ] Chart uses primaryAction color for line

## UX Requirements

- Chart is readable at mobile size
- Axis labels are clear
- Optional: tap point for day details

## Non-Functional Requirements

- Data from last 7 days of logs
- Chart library: implementation choice (Victory, react-native-chart-kit, etc.)
- Accessible: chart data available as table for screen readers

## Dependencies

- Log data with dates and severity

## Design Notes

Check `story-images/` for chart styling.
