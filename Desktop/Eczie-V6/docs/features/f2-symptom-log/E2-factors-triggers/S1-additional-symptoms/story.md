# S1: Additional Symptoms

## References
- Feature: F2 - Symptom Log
- Epic: E2 - Factors & Triggers
- PRD Section: 2.2.4

## User Story

As a user, I want to select additional symptoms beyond the main three so that I can provide a complete picture of my condition.

## Acceptance Criteria

- [ ] Display header "Additional Symptoms"
- [ ] Display subheader "Select any that apply (optional)"
- [ ] Display predefined symptom chips: Bleeding, Blistering, Crusting, Oozing/Weeping, Pain/Tenderness, Swelling, Skin thickening, Scaling, Stretch marks
- [ ] Tapping chip toggles selection state
- [ ] Selected chips show checkmark and highlighted style
- [ ] Display "+ Add symptom" action chip
- [ ] Tapping "+ Add symptom" opens text input for custom symptom
- [ ] Custom symptoms appear as chips after entry

## UX Requirements

- Chips wrap to multiple rows
- Multi-select allowed
- Toggle interaction is immediate
- Custom symptom input: max 30 characters

## Non-Functional Requirements

- Custom symptoms saved to user's symptom library for reuse
- Accessible: chip selection state announced

## Dependencies

- None

## Design Notes

Check `story-images/` for chip layout. Use Toggle Chip component from design system.
