# S1: Chat Header & Mode Toggle

## References
- Feature: F4 - AI Chat
- Epic: E1 - Chat Interface
- PRD Section: 2.5.1 - 2.5.2

## User Story

As a user, I want to see a clear header and switch between chat modes so that I can get the type of support I need.

## Acceptance Criteria

- [ ] Display back button (left chevron) for navigation
- [ ] Display title "EczAI Chat"
- [ ] Display menu button (three dots)
- [ ] Display mode toggle with options: "Skin Coach", "Emotional Support"
- [ ] "Skin Coach" selected by default
- [ ] Tapping mode option switches active mode
- [ ] Mode switch may clear or filter conversation context

## UX Requirements

- Mode toggle styled as segmented control/pill
- Active mode visually highlighted
- Mode switch is immediate (no confirmation)

## Non-Functional Requirements

- Mode preference persisted across sessions
- Accessible: toggle is properly labeled as tab group

## Dependencies

- Navigation system

## Design Notes

Check `story-images/` for header layout. Emotional Support mode conversation style is a design gap - implement with softer, empathetic AI prompting.
