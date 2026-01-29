# Eczie Product Documentation

## Purpose

This directory contains the complete feature breakdown for the Eczie mobile app — an eczema management application. It is structured to guide LLM-assisted development by providing clear epics, stories, and acceptance criteria.

## Important Notes for LLMs

1. **Designs may or may not be included.** If design images exist in `epic-images/` or `story-images/` folders, read them carefully. If no designs are present, ask the user to provide thoughts on the feature's visual and functional requirements before building implementation plans.

2. **Detailed specifications are in the PRD.** The full Product Requirements Document is located at `pm-notes/PRD.md`. Reference it for:
   - Exact microcopy and labels
   - UI element specifications
   - Interaction sequences
   - Identified design gaps

3. **Design System reference.** A brand-agnostic design system exists at the project root (`DESIGN-SYSTEM.md`) defining semantic tokens, component states, and composition rules.

## Directory Structure

```
/docs
├── README.md                    # This file
├── features/
│   └── f{N}-{feature-name}/
│       ├── feature.md           # Feature overview
│       └── E{N}-{epic-name}/
│           ├── epic.md          # Epic specification
│           ├── epic-images/     # Design references for epic
│           └── S{N}-{story-name}/
│               ├── story.md     # Story specification
│               └── story-images/# Design references for story
└── pm-notes/
    └── PRD.md                   # Full Product Requirements Document
```

## Features Index

| ID | Feature | Description |
|----|---------|-------------|
| F1 | Home Dashboard | Daily entry point with status, actions, progress |
| F2 | Symptom Log | Symptom tracking with sliders, triggers, photos |
| F3 | Routine Tracker | Skincare, medication, lifestyle task management |
| F4 | AI Chat | EczAI conversational assistant |
| F5 | Insights | Trends, charts, weekly reports, trigger analysis |
| F6 | Profile | User settings, data management, account actions |

## Story Specification Format

Each story follows this structure:

```markdown
# Story Title

## References
- Feature: F{N}
- Epic: E{N}
- PRD Section: {section reference}

## User Story
As a [user], I want [goal] so that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## UX Requirements
- Interaction details
- States to handle

## Non-Functional Requirements
- Performance, accessibility, offline, etc.

## Dependencies
- Other stories or external systems

## Design Notes
- Reference to images if present
- Open questions if designs missing
```

## How to Use This Documentation

1. **Start with the feature.md** to understand scope
2. **Read epic.md** for the major deliverable context
3. **Implement story by story** in suggested order
4. **Reference PRD** for detailed specifications
5. **Check design folders** for visual guidance
6. **Ask user** if designs are missing or unclear
