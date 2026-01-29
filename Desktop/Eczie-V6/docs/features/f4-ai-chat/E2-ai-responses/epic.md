# E2: AI Responses

## Feature Reference
- Feature: F4 - AI Chat
- PRD Section: 2.5.3 - 2.5.8

## Epic Overview

Implements AI response handling including loading states, error handling, and structured response cards (analysis cards, recommendation cards).

## Stories

| ID | Story | Description |
|----|-------|-------------|
| S1 | AI Message Handling | Send to backend, loading state, receive response |
| S2 | Analysis & Recommendation Cards | Structured cards embedded in chat |

## Acceptance Criteria (Epic-Level)

- [ ] User message sent to AI backend
- [ ] Loading indicator shown while waiting
- [ ] AI response displayed in chat
- [ ] Errors handled gracefully
- [ ] Structured cards render correctly

## UX Requirements

- Loading indicator (typing dots or similar)
- Error messages are helpful, not technical
- Cards are visually distinct from text messages
