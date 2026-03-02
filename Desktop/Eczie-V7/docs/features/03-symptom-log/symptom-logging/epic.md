# Epic: Symptom Logging

**Feature:** Symptom Log
**PRD Ref:** §2.2 Symptom Log Screen (Frame: 100:1653)

## Summary

The core daily logging flow. Users record symptom severity via sliders, tag additional symptoms, log lifestyle factors and possible triggers, attach photos of affected areas, and save the entry. This is the primary data-collection surface that feeds Insights and AI analysis.

## Acceptance Criteria

- User can adjust itchiness, redness, and dryness sliders (0–10) with real-time numeric feedback
- Severity score is auto-calculated and displayed
- User can toggle additional symptom chips and add custom symptoms
- User can record sleep duration, stress level, and environmental/food/personal triggers
- User can attach and remove photos of affected areas
- User can add free-text notes
- Save persists all data to Supabase; user is returned to Home with confirmation
- Date selector allows logging for past dates (not future)

## Non-Functional Requirements

- **Performance:** Slider interactions at 60 fps; no jank
- **Data:** All log data encrypted at rest; RLS enforced per user
- **Offline:** Draft buffered locally if offline; queued for sync
- **Accessibility:** Sliders have accessible labels and value announcements

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Symptom Sliders & Severity | `01-symptom-sliders-and-severity/` | Three sliders + calculated severity score |
| Additional Symptoms | `02-additional-symptoms/` | Toggle chips + custom symptom entry |
| Lifestyle & Triggers | `03-lifestyle-and-triggers/` | Sleep, stress, environment/food/personal triggers |
| Photo Upload | `04-photo-upload/` | Attach/remove photos of affected areas |
| Save Log Entry | `05-save-log-entry/` | Validation, save, confirmation, navigation |
