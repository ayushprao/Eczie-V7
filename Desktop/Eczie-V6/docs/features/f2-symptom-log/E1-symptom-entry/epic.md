# E1: Symptom Entry

## Feature Reference
- Feature: F2 - Symptom Log
- PRD Section: 2.2.1 - 2.2.3

## Epic Overview

Implements the core symptom entry interface including header with date selection, symptom severity sliders, and calculated severity score display.

## Stories

| ID | Story | Description |
|----|-------|-------------|
| S1 | Log Header | Back navigation, title, date selector |
| S2 | Symptom Sliders | Itchiness, redness, dryness sliders (0-10) |
| S3 | Severity Score | Calculated score with visual indicator |

## Acceptance Criteria (Epic-Level)

- [ ] User can navigate back to Home
- [ ] User can select date for log entry
- [ ] User can adjust three symptom sliders
- [ ] Severity score updates in real-time

## UX Requirements

- Sliders are above the fold
- Severity score visible without scrolling
- Smooth slider interaction with haptic feedback
