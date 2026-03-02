# Story: Chat Mode Toggle

**Epic:** EczAI Chat
**PRD Ref:** §2.5.2 Mode Toggle

## Summary

A segmented pill control below the header that switches between Skin Coach and Emotional Support personas.

## Functional Requirements

- Two-option segmented control: "Skin Coach" and "Emotional Support"
- Active option: blue filled pill, white bold text
- Inactive option: dark background, muted text
- Switching mode:
  - Updates the input placeholder text
  - Changes the AI system prompt/persona for subsequent messages
  - Does NOT clear existing conversation history
- Default mode on first open: Skin Coach

## Non-Functional Requirements

- Mode selection persisted per session (not across sessions — resets to Skin Coach)
- Toggle animation: smooth 200ms transition

## UX Notes

- Skin Coach placeholder: "Ask about your skin, triggers, or routines…"
- Emotional Support placeholder: "Tell me how you're feeling…"

## Designs

Place any reference screenshots in `designs/`.
