# S6: Recent Logs

## References
- Feature: F5 - Insights
- Epic: E1 - Insights Dashboard
- PRD Section: 2.6.7

## User Story

As a user, I want to see my recent log entries so that I can quickly review past days.

## Acceptance Criteria

- [ ] Display header "Recent Logs"
- [ ] Display list of recent log entries (last 3-5)
- [ ] Each entry shows:
  - Severity icon (emoji face)
  - Date (e.g., "Mon 24")
  - Severity score (e.g., "7/10")
  - Brief description (e.g., "High itch, poor sleep.")
  - Right chevron
- [ ] Tapping entry navigates to log detail view

## UX Requirements

- List items are compact
- Severity icon uses appropriate color
- Chevron indicates tappable

## Non-Functional Requirements

- Load last 5 logs
- Description truncated to single line
- Accessible: entry content announced

## Dependencies

- Log data
- Log detail view

## Design Notes

Check `story-images/` for list item styling. Use Log Entry List Item component.
