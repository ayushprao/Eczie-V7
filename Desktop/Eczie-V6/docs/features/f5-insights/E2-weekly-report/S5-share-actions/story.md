# S5: Share Actions

## References
- Feature: F5 - Insights
- Epic: E2 - Weekly Report
- PRD Section: 2.7.6

## User Story

As a user, I want to share my report as PDF or send it to my doctor so that I can discuss my progress with healthcare providers.

## Acceptance Criteria

- [ ] Display "Share as PDF" button (outline style)
- [ ] Display "Send to Doctor" button (filled primary style)
- [ ] Tapping "Share as PDF" generates PDF and opens system share sheet
- [ ] Tapping "Send to Doctor" opens system share sheet with email/messaging options
- [ ] PDF contains all visible report content

## UX Requirements

- Buttons at bottom of report
- Buttons full-width, stacked vertically
- Loading state during PDF generation

## Non-Functional Requirements

- PDF generated client-side
- PDF includes: header, date range, AI summary, adherence, triggers
- No PHI in share preview text
- Accessible: buttons properly labeled

## Dependencies

- PDF generation library
- System share API

## Design Notes

Check `story-images/` for button layout. PDF styling is implementation choice.
