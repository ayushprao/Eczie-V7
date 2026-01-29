# S2: Analysis & Recommendation Cards

## References
- Feature: F4 - AI Chat
- Epic: E2 - AI Responses
- PRD Section: 2.5.4 - 2.5.6

## User Story

As a user, I want to see structured analysis and recommendations so that I can easily understand insights from my data.

## Acceptance Criteria

- [ ] Analysis Card displays:
  - Title "Your 7-Day Analysis" with chart icon
  - Metric rows: Stress Level, Sleep Quality, Top Trigger
  - Values with severity color coding (red for high/poor)
- [ ] Recommendation Card displays:
  - Title "Here's what I recommend:" with lightbulb icon
  - Bullet list of actionable recommendations
- [ ] Cards embedded inline within message flow
- [ ] Cards are not interactive (display only)

## UX Requirements

- Cards visually distinct from text bubbles
- Card backgrounds use secondarySurface
- Severity colors applied to values appropriately
- Cards have consistent padding and spacing

## Non-Functional Requirements

- Card data structured in AI response (JSON parsed)
- Fallback to plain text if card parsing fails
- Accessible: card content readable in sequence

## Dependencies

- AI response format specification
- Message list rendering (E1-S2)

## Design Notes

Check `story-images/` for card styling. Use Analysis Card and Recommendation Card components.
