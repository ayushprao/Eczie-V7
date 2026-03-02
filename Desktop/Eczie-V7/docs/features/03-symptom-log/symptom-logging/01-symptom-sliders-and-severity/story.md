# Story: Symptom Sliders & Severity Score

**Epic:** Symptom Logging
**PRD Ref:** §2.2.1 Header, §2.2.2 Symptom Sliders, §2.2.3 Severity Score

## Summary

Screen header with back navigation and date selector, three draggable sliders for Itchiness / Redness / Dryness (0–10), and an auto-calculated severity score with emoji indicator.

## Functional Requirements

- Header: back button (→ Home), title "Symptom Log", date selector defaulting to "Today"
- Date selector allows past dates only (no future); picker UI: scrollable date list or calendar
- Three sliders: Itchiness, Redness, Dryness — range 0–10, default 0
- Numeric value label updates in real-time as user drags
- Severity score displayed below sliders with emoji face and label "Based on your symptoms"

## Non-Functional Requirements

- Slider interaction must be smooth (60 fps); use native gesture handler
- Severity formula: average of three slider values (pending GAP-001 resolution)

## Open Design Gaps

- GAP-001: Severity calculation formula — defaulting to simple average
- GAP-010: Date picker UI — defaulting to scrollable date list

## Designs

Place any reference screenshots in `designs/`.
