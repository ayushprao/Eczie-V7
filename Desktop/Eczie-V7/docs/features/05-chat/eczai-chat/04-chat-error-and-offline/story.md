# Story: Chat Error & Offline States

**Epic:** EczAI Chat
**PRD Ref:** §2.5.6 Error and Offline States

## Summary

Handle all failure modes in the chat experience: offline, send failure, AI response failure, and history loading.

## Functional Requirements

| State | Behavior |
|-------|----------|
| **Offline** | Full-area banner: "Chat requires internet connection." Composer disabled. |
| **Send failure** | Inline error text below composer; draft text preserved; retry button exposed |
| **AI fallback** | AI message shown with error styling; per-message retry action available |
| **Loading history** | Loading indicator shown while chat history hydrates on mount |

- Retry sends the same message payload
- Offline detection via network state listener; auto-recover when connectivity returns

## Non-Functional Requirements

- Error states must not lose user input
- Retry attempts: max 3 automatic, then manual retry only
- All error copy is empathetic, not technical (e.g., "Something went wrong — tap to try again")

## Open Design Gaps

- GAP-006: AI error handling visual states — defaulting to muted-red border on failed AI bubble with retry icon
- GAP-019: Offline behavior — specified above

## Designs

Place any reference screenshots in `designs/`.
