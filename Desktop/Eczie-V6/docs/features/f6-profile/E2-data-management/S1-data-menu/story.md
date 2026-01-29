# S1: Data Menu

## References
- Feature: F6 - Profile
- Epic: E2 - Data Management
- PRD Section: 2.8.5

## User Story

As a user, I want menu options for managing my data so that I can access history and control my information.

## Acceptance Criteria

- [ ] Display "Data & History" section header
- [ ] Display menu items:
  - Log History (clock icon) - navigates to history view
  - Export Data (download icon) - shows "Last export: X days ago"
  - Delete Entries (trash icon) - opens delete flow
  - Edit Personal Details (pencil icon) - opens edit form
- [ ] Each item has icon, title, optional subtitle, and chevron
- [ ] Tapping item triggers respective action

## UX Requirements

- List items use Menu List Item component
- Delete option uses warning color for icon
- Consistent spacing between items

## Non-Functional Requirements

- Log History screen is design gap - implement basic list view
- Edit Personal Details form is design gap - implement basic form
- Accessible: menu items properly labeled

## Dependencies

- Log data
- User profile data

## Design Notes

Check `story-images/` for menu layout. Several destination screens are design gaps.
