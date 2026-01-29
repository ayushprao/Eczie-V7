# S2: Export Data

## References
- Feature: F6 - Profile
- Epic: E2 - Data Management
- PRD Section: 2.8.5

## User Story

As a user, I want to export my data so that I have a backup and can share with healthcare providers.

## Acceptance Criteria

- [ ] Tapping "Export Data" initiates export process
- [ ] Show loading indicator during export generation
- [ ] Generate export file containing all user logs
- [ ] Open system share sheet with export file
- [ ] Update "Last export" timestamp on success

## UX Requirements

- Loading state visible during generation
- Success feedback after share sheet closes
- Error message if export fails

## Non-Functional Requirements

- Export format: CSV or JSON (implementation choice)
- Include: dates, severity scores, symptoms, triggers, notes
- Exclude: photos (separate export or too large)
- File named: eczie-export-{date}.csv
- Accessible: process status announced

## Dependencies

- Log data
- System share API

## Design Notes

Export format is a design gap - implement CSV for simplicity and healthcare compatibility.
