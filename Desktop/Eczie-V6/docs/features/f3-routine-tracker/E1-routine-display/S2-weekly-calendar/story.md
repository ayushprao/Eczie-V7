# S2: Weekly Calendar

## References
- Feature: F3 - Routine Tracker
- Epic: E1 - Routine Display
- PRD Section: 2.3.2

## User Story

As a user, I want to see a weekly calendar strip so that I can view my routine completion across the week.

## Acceptance Criteria

- [ ] Display 7 days (Su-Sa) in horizontal strip
- [ ] Past days with all tasks complete show checkmark (filled)
- [ ] Current day is highlighted
- [ ] Future days show date number (outline style)
- [ ] Tapping a day shows that day's tasks (if supported)

## UX Requirements

- Current day visually prominent
- Completed days use success color
- Compact horizontal layout
- Day labels abbreviated (Su, Mo, Tu, etc.)

## Non-Functional Requirements

- Week starts on Sunday (locale configurable)
- Accessible: day states announced

## Dependencies

- Task completion data

## Design Notes

Check `story-images/` for calendar styling. Use Week Strip Calendar component.
