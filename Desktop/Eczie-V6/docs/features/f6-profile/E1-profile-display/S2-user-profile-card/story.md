# S2: User Profile Card

## References
- Feature: F6 - Profile
- Epic: E1 - Profile Display
- PRD Section: 2.8.2

## User Story

As a user, I want to see my profile information so that I can verify my account details.

## Acceptance Criteria

- [ ] Display user avatar (circular photo)
- [ ] Display user name (e.g., "Sarah Mitchell")
- [ ] Display user email (e.g., "sarah.m@email.com")
- [ ] Display subscription badge (e.g., "Pro Trial")
- [ ] Display trial status with indicator (e.g., green dot + "5 days left")

## UX Requirements

- Avatar prominently displayed
- Name is primary text
- Email is secondary text
- Subscription badge styled as pill
- Trial status uses appropriate color (green for active)

## Non-Functional Requirements

- Profile data from authenticated user
- Avatar falls back to initials if no photo
- Accessible: all text readable

## Dependencies

- User authentication data

## Design Notes

Check `story-images/` for card layout.
