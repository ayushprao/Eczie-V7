# S2: AI Coach Summary

## References
- Feature: F5 - Insights
- Epic: E2 - Weekly Report
- PRD Section: 2.7.2

## User Story

As a user, I want to read a detailed AI analysis so that I understand my week's patterns and get actionable advice.

## Acceptance Criteria

- [ ] Display brain icon in gradient circle
- [ ] Display title "EczAI Coach Summary"
- [ ] Display multi-paragraph AI-generated content covering:
  - Overall progress assessment
  - Severity changes with numbers
  - Detected patterns and triggers
  - Sleep/lifestyle correlations
  - Recommendations for next week
- [ ] Display topic tags below summary (Sleep Quality, Skincare Routine, Stress Management, Medication Timing)
- [ ] Tags have icons and are not interactive

## UX Requirements

- Summary is readable long-form text
- Paragraphs clearly separated
- Tags in horizontal scroll or wrap

## Non-Functional Requirements

- Summary generated from weekly log data
- Tone follows emotional modulation rules (calm, supportive)
- Accessible: full content readable

## Dependencies

- AI summary generation backend
- Log data aggregation

## Design Notes

Check `story-images/` for summary section styling.
