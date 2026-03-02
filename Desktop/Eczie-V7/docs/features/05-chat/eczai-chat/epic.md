# Epic: EczAI Chat

**Feature:** Chat
**PRD Ref:** §2.5 Chat Screen (Frame: 58:212)

## Summary

An AI-powered conversational interface with two modes — Skin Coach (practical advice about triggers, routines, skin care) and Emotional Support (empathetic, validating conversation). The chat surfaces structured cards (e.g., 7-day analysis, recommendation lists) inline within AI responses. Includes attachment support, error/offline handling, and a persistent medical disclaimer.

## Acceptance Criteria

- User can toggle between Skin Coach and Emotional Support modes
- Empty state shows Eczie mascot, tagline, and disclaimer
- Active state shows scrollable message list with user (right/blue) and AI (left/dark) bubbles
- AI can return structured inline cards (summary metrics, recommendation lists)
- User can type messages and attach images
- Send button enabled only when input is non-empty
- Error, offline, and loading states handled gracefully
- Disclaimer always visible in empty state; three-dot menu offers "Clear History"

## Non-Functional Requirements

- **AI:** Responses via OpenAI API through Fastify backend; system prompt enforces empathy-first tone and medical disclaimer
- **Security:** No PHI sent to analytics; chat history stored in Supabase with RLS
- **Performance:** Streaming response rendering (token-by-token) for perceived speed
- **Offline:** Full-area banner when offline; composer disabled; draft text preserved

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Chat Mode Toggle | `01-chat-mode-toggle/` | Skin Coach / Emotional Support segmented control |
| Chat Conversation UI | `02-chat-conversation-ui/` | Message list, bubbles, structured cards, empty state |
| Chat Input & Attachments | `03-chat-input-and-attachments/` | Composer, send button, image attachment |
| Chat Error & Offline | `04-chat-error-and-offline/` | Offline banner, send failure, AI fallback, retry |
