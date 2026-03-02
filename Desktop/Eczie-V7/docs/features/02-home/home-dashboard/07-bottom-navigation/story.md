# Story: Bottom Navigation

**Epic:** Home Dashboard
**PRD Ref:** §2.1.8 Bottom Navigation

## Summary

Shared bottom tab bar used across all top-level screens. Implemented here as part of the Home feature since it is the first screen to render it; all other screens reuse the same component.

## Functional Requirements

- Four tabs: Home (house), Insights (chart), Chat (message), Profile (person)
- Active tab: blue icon + label; inactive tabs: gray icon + label
- Tapping a tab navigates to the corresponding top-level screen
- Active state reflects current route

## Non-Functional Requirements

- Rendered as a shared layout component (not duplicated per screen)
- 44pt minimum tap targets
- No layout shift on tab switch
- Safe-area aware (bottom inset on notched devices)

## Designs

Place any reference screenshots in `designs/`.
