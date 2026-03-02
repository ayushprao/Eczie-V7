# Story: Report Sharing

**Epic:** Weekly Insights Report
**PRD Ref:** §2.7.6 Action Buttons

## Summary

Two sharing actions at the bottom of the weekly report: PDF export and send-to-doctor.

## Functional Requirements

- **"Share as PDF"** (outline button):
  - Generates a PDF of the current weekly report
  - Opens system share sheet with the PDF file attached
- **"Send to Doctor"** (filled blue button):
  - Same PDF generation
  - Opens system share sheet pre-filtered to email/messaging (if platform supports)
  - No in-app doctor directory — uses device's native sharing

## Non-Functional Requirements

- PDF generation: prefer server-side endpoint returning PDF blob; fallback to client-side HTML-to-PDF
- PDF must include report date range and user name but no email/phone in metadata
- Loading indicator while PDF generates
- Error state: "Could not generate report — please try again"

## Open Design Gaps

- GAP-012: "Send to Doctor" flow — defaulting to system share sheet (no in-app provider integration for v1)

## Designs

Place any reference screenshots in `designs/`.
