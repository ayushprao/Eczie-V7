# Story: Additional Symptoms

**Epic:** Symptom Logging
**PRD Ref:** §2.2.4 Additional Symptoms Section

## Summary

A set of toggle chips for common additional symptoms, plus the ability to add custom symptoms.

## Functional Requirements

- Display predefined symptom chips: Bleeding, Blistering, Crusting, Oozing/Weeping, Pain/Tenderness, Swelling, Skin thickening, Scaling, Stretch marks
- Tapping a chip toggles it: selected (blue + checkmark) ↔ unselected
- "+ Add symptom" chip opens a text input for custom symptom entry
- Custom symptoms appear as new chips in the list for the current log
- Custom symptoms are saved per-user for reuse in future logs

## Non-Functional Requirements

- Multi-select allowed
- Custom symptom input: max 50 characters, trimmed whitespace, no duplicates

## Open Design Gaps

- GAP-008: Custom symptom entry UI — defaulting to inline expanding text field

## Designs

Place any reference screenshots in `designs/`.
