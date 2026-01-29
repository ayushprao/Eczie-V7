# Data Model: Affirmation Card

**Feature**: S2-affirmation-card  
**Date**: 2026-01-29  
**Status**: Complete

## Overview

This document defines the data structures for the Affirmation Card component. Since this is a frontend-only feature with no backend persistence, all entities are TypeScript interfaces used at runtime.

## Entities

### Affirmation

Represents a single affirmation message.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for the affirmation |
| `text` | `string` | Yes | The affirmation message text |
| `category` | `string` | No | Optional category for future filtering (e.g., "calm", "strength", "patience") |

**Validation Rules**:
- `id`: Non-empty string, unique within the list
- `text`: Non-empty string, max 150 characters, no exclamation marks
- `category`: If provided, must be a valid category enum value

**TypeScript Definition**:
```typescript
interface Affirmation {
  id: string;
  text: string;
  category?: AffirmationCategory;
}

type AffirmationCategory = 'calm' | 'strength' | 'patience' | 'acceptance' | 'self-care';
```

---

### AffirmationState

Runtime state for the affirmation card component.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `currentIndex` | `number` | Yes | Index of currently displayed affirmation |
| `affirmations` | `Affirmation[]` | Yes | Full list of available affirmations |

**State Transitions**:

```
┌─────────────────────────────────────────────────────────┐
│                    INITIAL LOAD                         │
│  currentIndex = getDailyAffirmationIndex(affirmations)  │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    DISPLAYING                           │
│  Shows affirmations[currentIndex]                       │
└─────────────────────────────────────────────────────────┘
                           │
                     [User taps card]
                     [Debounce passes]
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    CYCLE NEXT                           │
│  currentIndex = (currentIndex + 1) % affirmations.length│
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
                    [Back to DISPLAYING]
```

**Lifecycle**:
- **Created**: When Home screen mounts
- **Updated**: On each valid tap (after debounce)
- **Destroyed**: When Home screen unmounts (state not persisted)

---

## Static Data

### Affirmation List

The affirmation list is static and bundled with the app. No server-side management in MVP.

```typescript
const AFFIRMATIONS: Affirmation[] = [
  { id: 'aff-01', text: 'This flare is temporary, calm is returning.' },
  { id: 'aff-02', text: "You're doing what you can, and that's enough." },
  { id: 'aff-03', text: 'Your body is working through this.' },
  { id: 'aff-04', text: 'Small steps still move you forward.' },
  { id: 'aff-05', text: "Healing isn't linear, and that's okay." },
  { id: 'aff-06', text: 'You know your skin better than anyone.' },
  { id: 'aff-07', text: 'Rest is part of recovery.' },
  { id: 'aff-08', text: 'Today is just one day in your journey.' },
  { id: 'aff-09', text: 'Your comfort matters.' },
  { id: 'aff-10', text: 'Patience with yourself is a form of care.' },
];
```

**Content Validation** (per CR-001):
- ✅ Calm and validating tone
- ✅ No exclamation marks
- ✅ Acknowledges difficulty without false positivity
- ✅ Never implies user failure

---

## Zod Schema (for validation)

```typescript
import { z } from 'zod';

const AffirmationCategorySchema = z.enum([
  'calm',
  'strength', 
  'patience',
  'acceptance',
  'self-care',
]);

const AffirmationSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1).max(150).refine(
    (text) => !text.includes('!'),
    { message: 'Affirmations must not contain exclamation marks' }
  ),
  category: AffirmationCategorySchema.optional(),
});

const AffirmationsListSchema = z.array(AffirmationSchema).min(1);

export { AffirmationSchema, AffirmationsListSchema, AffirmationCategorySchema };
```

---

## Relationships

```
┌─────────────────┐
│  AffirmationCard │ (Component)
└────────┬────────┘
         │ uses
         ▼
┌─────────────────┐
│ useAffirmation  │ (Hook)
└────────┬────────┘
         │ manages
         ▼
┌─────────────────┐
│ AffirmationState│ (Runtime State)
└────────┬────────┘
         │ references
         ▼
┌─────────────────┐
│  AFFIRMATIONS   │ (Static Data)
└─────────────────┘
```

---

## No Backend Entities

This feature has no backend persistence. All data is:
- Static (bundled affirmations)
- Ephemeral (runtime state only)
- Local (no network calls)

No database tables, API endpoints, or server-side storage required.
