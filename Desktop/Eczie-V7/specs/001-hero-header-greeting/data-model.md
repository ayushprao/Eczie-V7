# Phase 1 Data Model: Hero Header & Greeting

## Overview

This feature reads from existing user/profile and logging documents, derives streak state, and exposes a small hero view model for the Home header.

## Entities

### 1) UserProfile

- **Purpose**: Provides personalization source for greeting.
- **Source**: `users` collection (Convex).
- **Fields**:
  - `userId: string` (required, unique)
  - `firstName: string | null` (optional)
- **Validation Rules**:
  - `userId` must match authenticated identity.
  - `firstName` is trimmed before use; empty string is treated as null.
- **Relationships**:
  - One `UserProfile` to many `DailyLog` entries.

### 2) DailyLog

- **Purpose**: Raw evidence for streak calculation.
- **Source**: `logs` collection (Convex).
- **Fields** (relevant subset for this feature):
  - `_id: string`
  - `userId: string` (required)
  - `createdAt: string` (ISO timestamp)
  - `localDayKey: string` (derived key like `YYYY-MM-DD` in user timezone)
- **Validation Rules**:
  - `userId` must match authenticated user for all reads.
  - Multiple logs on same day count as one day toward streak.
- **Relationships**:
  - Many `DailyLog` records map to one user and many `StreakDay` values.

### 3) LoggingStreak (Derived)

- **Purpose**: Consecutive day count displayed in hero badge.
- **Materialization**: Computed at query-time from `DailyLog.localDayKey` set.
- **Fields**:
  - `currentStreak: number` (integer, >= 0)
  - `lastLoggedDayKey: string | null`
  - `timezone: string` (IANA name from client input)
  - `evaluatedAt: string` (ISO timestamp, optional for debugging/telemetry)
- **Validation Rules**:
  - Streak increments for contiguous local calendar days with >=1 log.
  - Missing today does not break streak until local day rollover completes.
  - After one full missed day, streak becomes 0.

### 4) HeroHeaderViewModel (Query Output)

- **Purpose**: Minimal response contract from backend to UI.
- **Fields**:
  - `firstName: string | null`
  - `streakCount: number` (>= 0)
  - `mascotAssetKey: "eczie-default"`
- **Derived Client Fields** (not persisted):
  - `dateLabel: string` (localized uppercase format)
  - `greetingText: string` (`Welcome back, {name}` or `Welcome back`)
  - `streakLabel: string | null` (`{N} day(s) strong` when `streakCount >= 1`)

## State Transitions

### Greeting State

- `NameAvailable` -> render `Welcome back, {firstName}`
- `NameMissing` -> render `Welcome back`

### Streak State

- `NoHistory (0)` -> no badge rendered
- `Active (1+)` -> badge rendered with singular/plural grammar
- `GraceTodayMissing` -> remains `Active` until end-of-day boundary
- `BrokenAfterMissedDay` -> transitions to `NoHistory (0)`

### Loading/Render State (UI)

- `Loading` -> fixed-size skeleton placeholder for badge slot
- `ResolvedWithStreak` -> badge replaces skeleton
- `ResolvedWithoutStreak` -> empty reserved slot collapses only after initial stable layout pass

## Invariants

- Every query path is authenticated and filtered by `userId`.
- `streakCount` is never negative.
- UI never shows `0 days strong`.
- Greeting string never includes dangling punctuation.
- Hero container dimensions remain stable across loading/error states.
