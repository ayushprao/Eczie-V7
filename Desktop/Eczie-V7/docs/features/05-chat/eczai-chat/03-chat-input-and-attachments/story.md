# Story: Chat Input & Attachments

**Epic:** EczAI Chat
**PRD Ref:** §2.5.5 Input Area

## Summary

The chat composer: text input with mode-dependent placeholder, image attachment button, and send button.

## Functional Requirements

- Attachment button (paperclip icon, left side): opens system image picker for photo attachment
- Text input: single-line expanding to multi-line; placeholder changes based on active mode
- Send button (blue circle, up-arrow icon, right side): enabled only when input is non-empty and not currently sending
- On send: message appears immediately in the list (optimistic); AI response streams in
- Attached image displayed as thumbnail preview in composer before sending; removable via X

## Non-Functional Requirements

- Image attachments compressed client-side (max 1 MB)
- Max 1 image per message
- Input text preserved if send fails (see error story)

## Open Design Gaps

- Attachment types: confirmed images only for v1; other file types TBD

## Designs

Place any reference screenshots in `designs/`.
