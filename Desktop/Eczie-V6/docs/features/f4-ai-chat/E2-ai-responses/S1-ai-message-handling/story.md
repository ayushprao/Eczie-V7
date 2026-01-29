# S1: AI Message Handling

## References
- Feature: F4 - AI Chat
- Epic: E2 - AI Responses
- PRD Section: 2.5.3 - 2.5.8

## User Story

As a user, I want my messages processed by EczAI so that I receive helpful responses about my skin health.

## Acceptance Criteria

- [ ] User message sent to AI backend on submit
- [ ] Show typing indicator while waiting for response
- [ ] AI response appears as new message when received
- [ ] Response may include plain text and/or structured cards
- [ ] On error: display message "I couldn't respond right now. Please try again."
- [ ] Error message styled as AI message
- [ ] Retry option available after error

## UX Requirements

- Typing indicator appears immediately after send
- Response streams in or appears complete (implementation choice)
- No timeout visible to user (handle gracefully)

## Non-Functional Requirements

- Request timeout: 30 seconds
- Retry logic: 1 automatic retry on network error
- AI context includes recent logs and conversation history
- HIPAA: no PHI sent to non-compliant services
- Accessible: loading state announced

## Dependencies

- AI backend (Fastify + OpenAI)
- User log data for context
- Message persistence

## Design Notes

Check `story-images/` for loading indicator. AI prompt engineering is backend concern.
