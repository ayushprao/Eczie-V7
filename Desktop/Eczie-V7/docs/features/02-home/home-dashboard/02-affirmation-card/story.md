# Story: Affirmation Card

**Epic:** Home Dashboard
**PRD Ref:** §2.1.2 Affirmation Card

## Summary

Display a tappable card with a rotating supportive affirmation. Tapping cycles to the next message.

## Functional Requirements

- Show affirmation text (e.g., "This flare is temporary, calm is returning.")
- Show action hint: "Tap for more affirmations"
- Tapping the card cycles to the next affirmation from a curated list
- Affirmation pool: minimum 15–20 empathy-first messages (no medical claims)

## Non-Functional Requirements

- Rotation logic: randomized on each tap; avoid immediate repeats
- Affirmations stored client-side (hardcoded or fetched from config)

## Open Design Gaps

- GAP-016: Rotation logic (random vs. time-based vs. condition-based) — defaulting to random-on-tap

## Designs

Place any reference screenshots in `designs/`.
