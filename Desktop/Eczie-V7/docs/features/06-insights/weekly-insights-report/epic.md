# Epic: Weekly Insights Report

**Feature:** Insights
**PRD Ref:** §2.7 Weekly Insights Report Screen (Frame: 123:309)

## Summary

A detailed, shareable weekly report containing the EczAI Coach narrative summary, routine adherence breakdown, progress metrics, AI-detected trigger correlations, and export/sharing actions. Accessed from the Insights Dashboard via "View Full Report →".

## Acceptance Criteria

- EczAI Coach Summary with multi-paragraph narrative and topic tags
- Routine adherence summary by category (Skincare, Medications, Lifestyle) with percentages
- Progress metrics (flare-free days, moderate days, flares this month)
- AI-detected triggers table with risk level, correlation %, and description
- "Share as PDF" exports the report
- "Send to Doctor" shares via system share sheet

## Non-Functional Requirements

- Report data generated weekly by backend AI pipeline; cached in Supabase
- PDF generation: server-side or client-side HTML-to-PDF
- No PHI in share metadata (file name, subject line); PHI only in the PDF content itself
- Report renders as a scrollable read-only screen

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Weekly Report View | `01-weekly-report-view/` | Coach summary, adherence, triggers, progress display |
| Report Sharing | `02-report-sharing/` | PDF export and share-to-doctor flow |
