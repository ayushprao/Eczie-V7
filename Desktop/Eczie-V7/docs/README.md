# Eczie — Feature Docs Structure

## Purpose

This directory contains the **feature decomposition** for the Eczie app. It is organized by **Feature → Epic → Story** and is designed to be consumed by both humans and LLMs during implementation planning.

## How to Read This Directory

```
/docs
├── README.md              ← You are here
├── features/
│   ├── 01-auth-onboarding/
│   ├── 02-home/
│   ├── 03-symptom-log/
│   ├── 04-routine-tracking/
│   ├── 05-chat/
│   ├── 06-insights/
│   └── 07-profile/
│       └── <epic-name>/
│           ├── epic.md                  ← Epic definition & acceptance criteria
│           └── <story-name>/
│               ├── story.md             ← Story spec with functional/non-functional requirements
│               └── designs/             ← (Optional) Reference images / design snapshots
│                   └── *.png / *.jpg
└── pm-notes/
    └── PRD.md                           ← Full Product Requirements Document
```

## Key Conventions

| Term | Meaning |
|------|---------|
| **Feature** | A user-visible capability or business outcome (e.g., Home, Symptom Log, Chat) |
| **Epic** | A major deliverable or flow that realizes part of a feature |
| **Story** | An increment that fulfills part of an epic's acceptance criteria |

## Designs

Design snapshots **may or may not** be included in each story's `designs/` folder. When they are present:

1. **Read them** — they represent the intended UX from the product designer.
2. **Ask the user** for their thoughts on the feature's function before building implementation plans. Designs are a starting point, not a final contract.

When designs are **not** present, rely on the story spec and the PRD for behavioral guidance.

## PRD Reference

Detailed specifications for every feature, screen, and interaction are found in the **PRD** at `pm-notes/PRD.md`. Each story references specific PRD sections (e.g., "§2.1.3 Skin Status Section") for full microcopy tables, element inventories, and identified design gaps.

## Dependency Order (Suggested)

1. **Auth & Onboarding** — session foundation
2. **Home** — primary entry point (includes bottom nav, which is shared)
3. **Symptom Log** — core logging flow launched from Home
4. **Routine Tracking** — secondary logging flow launched from Home
5. **Chat (EczAI)** — AI companion
6. **Insights** — analytics & reports (depends on logged data)
7. **Profile** — settings, data management, account lifecycle
