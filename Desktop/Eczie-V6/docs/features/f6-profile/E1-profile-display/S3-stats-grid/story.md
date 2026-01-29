# S3: Stats Grid

## References
- Feature: F6 - Profile
- Epic: E1 - Profile Display
- PRD Section: 2.8.3

## User Story

As a user, I want to see my key statistics so that I understand my tracking history at a glance.

## Acceptance Criteria

- [ ] Display 4 stats in grid layout:
  - Total Logs (e.g., "127")
  - Best Streak (e.g., "14")
  - Average Severity (e.g., "4.2")
  - Last Backup (e.g., "Today")
- [ ] Each stat shows value prominently with label below

## UX Requirements

- 2x2 grid layout
- Values are large, labels are small
- Consistent card styling

## Non-Functional Requirements

- Stats calculated from all user log data
- Last backup reflects most recent sync
- Accessible: values announced with labels

## Dependencies

- Log data aggregation
- Sync/backup status

## Design Notes

Check `story-images/` for grid layout. Use Metric Card component.
