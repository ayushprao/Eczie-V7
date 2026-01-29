# S2: Symptom Sliders

## References
- Feature: F2 - Symptom Log
- Epic: E1 - Symptom Entry
- PRD Section: 2.2.2

## User Story

As a user, I want to adjust sliders for my main symptoms so that I can quickly and accurately record my symptom severity.

## Acceptance Criteria

- [ ] Display three sliders: Itchiness, Redness, Dryness
- [ ] Each slider has range 0-10
- [ ] Current value displayed as number next to slider
- [ ] Dragging slider updates value in real-time
- [ ] Sliders contained in dark card with rounded corners
- [ ] Default values are 0 (or loaded from existing log)

## UX Requirements

- Sliders are touch-friendly (large thumb)
- Value snaps to integers
- Haptic feedback on value change (optional)
- Labels clearly visible above each slider

## Non-Functional Requirements

- Slider state persisted in form state (not saved until explicit save)
- Accessible: slider value announced on change
- Keyboard accessible with arrow key increments

## Dependencies

- Severity score calculation (S3)

## Design Notes

Check `story-images/` for slider styling. Use Symptom Slider component from design system.
