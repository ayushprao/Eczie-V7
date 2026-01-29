# S4: Detected Triggers

## References
- Feature: F5 - Insights
- Epic: E2 - Weekly Report
- PRD Section: 2.7.5

## User Story

As a user, I want to see AI-detected triggers with confidence levels so that I can understand what may be causing my flares.

## Acceptance Criteria

- [ ] Display "EczAI-Detected Triggers" section header
- [ ] Display trigger list with for each:
  - Trigger name (e.g., "Stress")
  - Risk level badge (High Risk, Medium Risk, Low Risk)
  - Correlation percentage (e.g., "82%")
  - Description (e.g., "Correlated with 4 out of 5 severe flare days.")
- [ ] Progress bar showing correlation percentage
- [ ] Risk level colors: High = severityHigh, Medium = severityModerate, Low = severityLow

## UX Requirements

- Triggers ordered by correlation (highest first)
- Risk badges clearly visible
- Descriptions are concise

## Non-Functional Requirements

- Triggers detected from log data correlation
- Minimum 3 triggers shown if data available
- Accessible: risk levels and percentages announced

## Dependencies

- AI trigger detection
- Log data with triggers

## Design Notes

Check `story-images/` for trigger card styling.
