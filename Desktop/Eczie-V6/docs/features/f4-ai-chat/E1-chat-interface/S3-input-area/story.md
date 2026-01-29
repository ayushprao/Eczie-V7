# S3: Input Area

## References
- Feature: F4 - AI Chat
- Epic: E1 - Chat Interface
- PRD Section: 2.5.11

## User Story

As a user, I want to type and send messages so that I can communicate with EczAI.

## Acceptance Criteria

- [ ] Display text input with placeholder "Ask anything about your skin..."
- [ ] Display attachment button (paperclip icon)
- [ ] Display send button (arrow icon)
- [ ] Send button enabled only when input has text
- [ ] Tapping send submits message and clears input
- [ ] Tapping attachment opens file picker
- [ ] Input area fixed at bottom of screen

## UX Requirements

- Input expands for multi-line text (up to 4 lines)
- Send button uses primaryAction color when enabled
- Keyboard does not obscure input
- Attachment button is secondary action

## Non-Functional Requirements

- Message max length: 1000 characters
- Attachment types: images only (design assumption)
- Offline: show "Chat requires internet connection" and disable send
- Accessible: input and buttons properly labeled

## Dependencies

- Message sending logic
- AI backend connection

## Design Notes

Check `story-images/` for input area layout.
