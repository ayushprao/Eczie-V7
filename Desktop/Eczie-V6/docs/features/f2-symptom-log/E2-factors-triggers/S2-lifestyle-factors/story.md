# S2: Lifestyle Factors

## References
- Feature: F2 - Symptom Log
- Epic: E2 - Factors & Triggers
- PRD Section: 2.2.5

## User Story

As a user, I want to log my sleep and stress levels so that patterns between lifestyle and symptoms can be detected.

## Acceptance Criteria

- [ ] Display "Sleep Last Night" section with options: 2h, 4h, 6h, 8h, 10h
- [ ] Only one sleep option can be selected
- [ ] Display "Stress Level" section with options: Low, Medium, High
- [ ] Only one stress option can be selected
- [ ] Selections persist in form state

## UX Requirements

- Single-select chip groups
- Selected chip highlighted
- Horizontal layout for options
- Clear section labels

## Non-Functional Requirements

- Both fields optional (can save without selection)
- Accessible: radio group semantics

## Dependencies

- None

## Design Notes

Check `story-images/` for layout. Use Single-Select Chip Group component.
