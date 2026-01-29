# Data Model: Greeting Header

**Feature**: F1-E1-S1 Greeting Header  
**Date**: 2026-01-29  
**Source**: [spec.md](./spec.md)

## Entities

### 1. UserProfile (Read-Only for this feature)

The Greeting Header reads the user's first name from the cached profile. This entity is owned by the authentication/profile feature; this component only consumes it.

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| `id` | `string (UUID)` | Required, unique | User identifier |
| `firstName` | `string \| null` | Optional, max 100 chars | Display name for greeting |
| `createdAt` | `Date` | Required | Account creation timestamp |
| `updatedAt` | `Date` | Required | Last profile update |

**Validation Rules**:
- `firstName` may be `null`, empty, or whitespace-only → fallback to "friend"
- `firstName` > 30 characters → truncate with ellipsis for display

**Source**: Cached locally via `@tanstack/react-query` from Supabase `profiles` table.

---

### 2. StreakData (Read-Only for this feature)

The Greeting Header reads the current streak count. Streak calculation is owned by the symptom logging feature; this component only consumes the cached value.

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| `userId` | `string (UUID)` | Required | Foreign key to user |
| `currentStreak` | `number` | Required, >= 0 | Consecutive days with symptom log |
| `lastLogDate` | `Date \| null` | Optional | Date of most recent symptom log |
| `longestStreak` | `number` | Required, >= 0 | Historical best streak |
| `updatedAt` | `Date` | Required | Last streak calculation |

**Validation Rules**:
- `currentStreak` must be non-negative integer
- `currentStreak === 0` → hide streak badge
- `currentStreak === 1` → display "1 day strong"
- `currentStreak > 1` → display "{N} days strong"

**Streak Definition** (from clarifications):
- A day counts toward streak only if a symptom log entry is saved
- Streak resets to 0 if a calendar day is missed (user's local timezone)

**Source**: Cached locally via `@tanstack/react-query`; updated when symptom log is saved.

---

### 3. CurrentDate (Computed)

Not persisted. Computed at render time from device clock.

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| `date` | `Date` | Required | Device-local current date |
| `locale` | `string` | Required | Device locale (e.g., "en-US") |

**Formatting Rules** (from clarifications):
- Format: "WEEKDAY · MONTH DAY" (e.g., "FRIDAY · JUNE 21")
- Weekday and month names localized to device language
- Rendered in uppercase

---

## State Transitions

This component is display-only with no state mutations. Data flows one-way from cache to UI.

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Supabase DB    │────▶│  React Query    │────▶│ GreetingHeader  │
│  (profiles,     │     │  Cache          │     │ Component       │
│   streak_data)  │     │  (local)        │     │ (read-only)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       ▲
        │                       │
        └───────────────────────┘
          Background sync on app resume
```

---

## Relationships

```
UserProfile (1) ──────── (1) StreakData
     │                        │
     │                        │
     ▼                        ▼
GreetingHeader reads both via hooks
```

- **UserProfile → StreakData**: One-to-one relationship via `userId`
- **GreetingHeader**: Consumes both entities via `useUserProfile()` and `useStreakCount()` hooks

---

## Cache Strategy

| Entity | Cache Key | Stale Time | GC Time | Refetch Trigger |
|--------|-----------|------------|---------|-----------------|
| UserProfile | `['profile', userId]` | 5 minutes | 24 hours | App resume, profile edit |
| StreakData | `['streak', 'current']` | Infinity | 24 hours | Symptom log save |

**Rationale**:
- Profile may change (user edits name) → moderate stale time
- Streak only changes on log save → infinite stale time, invalidated on mutation
- Both cached for 24h to support offline rendering

---

## Zod Schemas

See `contracts/greeting-header.schema.ts` for implementation.

```typescript
// Preview of schema structure
const UserProfileSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().max(100).nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

const StreakDataSchema = z.object({
  userId: z.string().uuid(),
  currentStreak: z.number().int().nonnegative(),
  lastLogDate: z.coerce.date().nullable(),
  longestStreak: z.number().int().nonnegative(),
  updatedAt: z.coerce.date(),
});
```
