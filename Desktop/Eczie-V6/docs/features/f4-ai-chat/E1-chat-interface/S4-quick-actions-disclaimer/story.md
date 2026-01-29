# S4: Quick Actions & Disclaimer

## References
- Feature: F4 - AI Chat
- Epic: E1 - Chat Interface
- PRD Section: 2.5.9 - 2.5.10

## User Story

As a user, I want quick action buttons and a visible disclaimer so that I can easily access common queries and understand the AI's limitations.

## Acceptance Criteria

- [ ] Display quick action buttons: "Show weekly summary", "Suggest coping tip"
- [ ] Buttons styled as pill/chip buttons
- [ ] Tapping button sends corresponding message to AI
- [ ] Display disclaimer: "EczAI is for informational purposes and not a medical diagnosis."
- [ ] Disclaimer always visible above input area

## UX Requirements

- Quick actions in horizontal scroll above disclaimer
- Disclaimer uses small, muted text
- Disclaimer cannot be dismissed

## Non-Functional Requirements

- Quick actions are predefined (not dynamic)
- Accessible: disclaimer readable by screen reader

## Dependencies

- Message sending (S3)

## Design Notes

Check `story-images/` for layout. Quick actions may expand based on user feedback.
