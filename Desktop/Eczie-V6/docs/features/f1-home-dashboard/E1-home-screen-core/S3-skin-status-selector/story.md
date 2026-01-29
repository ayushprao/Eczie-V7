# S3: Skin Status Selector

## References
- Feature: F1 - Home Dashboard
- Epic: E1 - Home Screen Core
- PRD Section: 2.1.3

## User Story

As a user, I want to quickly indicate how my skin feels today so that I can track my condition with minimal effort.

## Acceptance Criteria

- [ ] Display label "How's your skin today?"
- [ ] Show three options: Clear, Moderate, Flaring
- [ ] Each option has corresponding icon (green happy, yellow neutral, red sad)
- [ ] Tapping an option selects it with visual highlight
- [ ] Selection auto-saves without explicit save button
- [ ] Previously saved selection loads on screen open

## UX Requirements

- Only one option can be selected at a time
- Selection provides immediate visual feedback
- No confirmation dialog (frictionless entry)
- If user changes selection, new value overwrites previous

## Non-Functional Requirements

- Auto-save triggers within 500ms of selection
- Offline: queue save for sync when online
- Accessible: options are radio button group semantically

## Dependencies

- Daily log data model (to persist skin status)

## Design Notes

Check `story-images/` for selector layout. Icons should use severity color tokens (severityLow, severityModerate, severityHigh).
