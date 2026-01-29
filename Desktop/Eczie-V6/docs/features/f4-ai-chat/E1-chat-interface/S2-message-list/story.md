# S2: Message List

## References
- Feature: F4 - AI Chat
- Epic: E1 - Chat Interface
- PRD Section: 2.5.3

## User Story

As a user, I want to see my conversation history so that I can review past insights and continue discussions.

## Acceptance Criteria

- [ ] Display messages in chronological order (oldest at top)
- [ ] User messages aligned right, AI messages aligned left
- [ ] Each message shows timestamp (e.g., "9:42 AM")
- [ ] Date separators shown between days (e.g., "Today")
- [ ] Messages support embedded cards (analysis, recommendations)
- [ ] Auto-scroll to newest message on load and new message

## UX Requirements

- AI messages use distinct background color
- User messages use primaryAction background
- Timestamps are subtle (small, muted text)
- Smooth scroll behavior

## Non-Functional Requirements

- Message history persisted locally
- Load last 50 messages on screen open
- Older messages load on scroll up (pagination)
- Accessible: messages announced in order

## Dependencies

- Message data model
- AI response handling (E2)

## Design Notes

Check `story-images/` for message bubble styling.
