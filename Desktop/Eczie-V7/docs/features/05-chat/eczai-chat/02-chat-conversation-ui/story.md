# Story: Chat Conversation UI

**Epic:** EczAI Chat
**PRD Ref:** §2.5.1 Header, §2.5.3 Empty State, §2.5.4 Active Chat State, §2.5.7 Disclaimer

## Summary

The core chat interface: header with mascot icon and menu, empty state with Eczie mascot + disclaimer, and the active conversation view with message bubbles and inline structured cards.

## Functional Requirements

- Header: back button, small Eczie mascot icon, title "EczAI", three-dot menu with "Clear History"
- **Empty state** (no messages):
  - Centered Eczie mascot illustration
  - "Eczie" bold title, "Your eczema companion" tagline
  - Disclaimer: "EczAI provides informational support and is not a medical diagnosis."
- **Active state** (messages exist):
  - Scrollable message list, newest at bottom, auto-scroll on new message
  - Date separator labels (e.g., "Today")
  - User bubbles: right-aligned, blue background
  - AI bubbles: left-aligned, dark card background
  - AI structured cards rendered inline: 7-day analysis summaries (metrics table), recommendation lists (bulleted with icons)
- "Clear History" confirmation dialog before wiping messages

## Non-Functional Requirements

- Message history persisted in Supabase; loaded on mount with loading indicator
- Virtualized list for performance with large histories
- AI disclaimer always visible when no conversation is active

## Open Design Gaps

- GAP-018: Message history persistence — confirmed as Supabase-backed

## Designs

Place any reference screenshots in `designs/`.
