# F4: AI Chat

## Overview

The AI Chat feature provides conversational access to EczAI, a skin health assistant that analyzes user logs and provides personalized insights, recommendations, and emotional support.

## PRD Reference

- Section 2.5: CHAT SCREEN

## User Outcomes

- Converse with EczAI about skin health
- Receive analysis of symptom patterns
- Get personalized recommendations
- Access emotional support mode
- View structured analysis cards in chat

## Epics

| ID | Epic | Description |
|----|------|-------------|
| E1 | Chat Interface | Header, mode toggle, message list, input |
| E2 | AI Responses | Message handling, analysis cards, recommendations |

## Dependencies

- User log data (for AI analysis)
- AI backend (OpenAI API via Fastify)
- Bottom navigation

## Out of Scope

- Voice input/output
- Multi-language support
- Chat export
