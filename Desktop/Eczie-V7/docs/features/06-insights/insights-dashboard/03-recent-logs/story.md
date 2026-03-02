# Story: Recent Logs

**Epic:** Insights Dashboard
**PRD Ref:** §2.6.7 Recent Logs Section

## Summary

A list of the most recent symptom log entries with date, severity score, short description, and severity emoji.

## Functional Requirements

- Show last 5–7 log entries in reverse chronological order
- Each entry displays:
  - Day + date (e.g., "Mon 24")
  - Severity score (e.g., "7/10")
  - Short description (first ~40 chars of notes, or auto-generated summary)
  - Severity emoji icon (green/yellow/red face)
- Right chevron on each entry — tappable to navigate to a log detail view
- Empty state: "No logs yet — start tracking to see your history here"

## Non-Functional Requirements

- List items are read-only; editing happens via Symptom Log screen
- Data fetched as part of Insights screen query (single round-trip)

## Open Design Gaps

- GAP-011: Log detail view not provided — placeholder: show full log data in a read-only scrollable sheet

## Designs

Place any reference screenshots in `designs/`.
