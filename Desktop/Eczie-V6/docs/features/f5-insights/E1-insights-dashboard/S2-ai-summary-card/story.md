# S2: AI Summary Card

## References
- Feature: F5 - Insights
- Epic: E1 - Insights Dashboard
- PRD Section: 2.6.2

## User Story

As a user, I want to see a quick AI-generated summary so that I understand my week at a glance.

## Acceptance Criteria

- [ ] Display card with title "Your Week at a Glance"
- [ ] Display AI-generated summary text (1-2 sentences)
- [ ] Display "View Full Report →" link
- [ ] Tapping link navigates to Weekly Insights Report
- [ ] Card uses gradient/highlighted styling

## UX Requirements

- Card is visually prominent (gradient background)
- Summary text is concise and readable
- Link is clearly tappable

## Non-Functional Requirements

- Summary generated from weekly log data
- Cached and refreshed daily or on new log
- Fallback if no data: "Log more days to see insights"
- Accessible: card content readable

## Dependencies

- AI summary generation
- Weekly Report screen (E2)

## Design Notes

Check `story-images/` for card styling. Use Summary Card component.
