# Story: Weekly Report View

**Epic:** Weekly Insights Report
**PRD Ref:** §2.7.1 Header, §2.7.2 EczAI Coach Summary, §2.7.3 Routine Adherence, §2.7.4 Progress, §2.7.5 Triggers

## Summary

Render the full weekly insights report as a scrollable read-only screen.

## Functional Requirements

- Header: back button, share icon, title "Weekly Insights Report", date range label (e.g., "June 17–23, 2025")
- **EczAI Coach Summary:**
  - Brain icon + "EczAI Coach Summary" title
  - Multi-paragraph AI-generated narrative (progress, correlations, recommendations)
  - Topic tags row: Sleep Quality, Skincare Routine, Stress Management, Medication Timing (with icons)
- **Routine Adherence Summary:**
  - Per-category row: Skincare, Medications, Lifestyle — each with percentage + "X/Y Tasks"
  - Overall percentage row
- **Your Progress:**
  - Three metrics: Flare-free Days, Moderate Days, Flares this Month (same data as Home)
- **EczAI-Detected Triggers:**
  - Table rows: Trigger name, risk level badge (High/red, Medium/yellow, Low/green), correlation %, description
  - Horizontal progress bars showing correlation percentage

## Non-Functional Requirements

- All data pre-computed by backend; single fetch on mount
- Empty state if no report available: "Check back after your first full week of logging"

## Designs

Place any reference screenshots in `designs/`.
