# S1: Support Menu

## References
- Feature: F6 - Profile
- Epic: E3 - Account Actions
- PRD Section: 2.8.6

## User Story

As a user, I want access to support resources so that I can get help and understand the app's policies.

## Acceptance Criteria

- [ ] Display "About & Support" section header
- [ ] Display menu items:
  - FAQ and Support (question mark icon) - opens FAQ
  - Privacy Policy (document icon) - opens external link
  - Send Feedback and Feature Requests (message icon) - opens feedback form
  - Version and Build (info icon) - displays "v2.1.3 - Build 47"
- [ ] External links open in system browser
- [ ] Version info is display-only (not tappable)

## UX Requirements

- List items use Menu List Item component
- External link items show external link indicator
- Version displayed inline, no navigation

## Non-Functional Requirements

- FAQ and Feedback screens are design gaps - implement basic views or external links
- Privacy Policy links to hosted document
- Accessible: menu items properly labeled

## Dependencies

- External URLs for privacy policy
- App version from build config

## Design Notes

Check `story-images/` for menu layout.
