# Research: Affirmation Card

**Feature**: S2-affirmation-card  
**Date**: 2026-01-29  
**Status**: Complete

## Overview

This document resolves all technical unknowns identified during the planning phase for the Affirmation Card component. Since this is a self-contained frontend component with no backend dependencies, the research scope is limited to implementation patterns and best practices.

## Research Tasks

### 1. Daily Rotation Algorithm

**Decision**: Use day-of-year modulo list length for deterministic daily selection.

**Rationale**: 
- Deterministic: Same affirmation shown all day regardless of app restarts
- Simple: No persistence required, calculated from current date
- Testable: Easy to mock date for unit tests

**Implementation**:
```typescript
const getDailyAffirmationIndex = (affirmations: Affirmation[]): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % affirmations.length;
};
```

**Alternatives Considered**:
- Random seed from date string: More complex, no added benefit
- Stored preference: Requires persistence, violates simplicity principle

---

### 2. Session State Management

**Decision**: Use React `useState` within the component, initialized from daily rotation.

**Rationale**:
- Zustand is for cross-component ephemeral state; this is component-local
- No need for global state—affirmation index is only relevant to this card
- Aligns with Constitution Principle VII (Simplicity Over Premature Scale)

**Implementation**:
```typescript
const useAffirmation = () => {
  const [currentIndex, setCurrentIndex] = useState(() => 
    getDailyAffirmationIndex(AFFIRMATIONS)
  );
  
  const cycleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % AFFIRMATIONS.length);
  }, []);
  
  return { 
    affirmation: AFFIRMATIONS[currentIndex], 
    cycleNext 
  };
};
```

**Alternatives Considered**:
- Zustand store: Overkill for single-component state
- Context: Unnecessary indirection for non-shared state

---

### 3. Tap Debounce Implementation

**Decision**: Use `useRef` with timestamp comparison (300ms threshold).

**Rationale**:
- Lightweight, no external dependencies
- Prevents rapid cycling that could feel jarring
- Aligns with emotional steadiness principle

**Implementation**:
```typescript
const lastTapRef = useRef<number>(0);

const handleTap = useCallback(() => {
  const now = Date.now();
  if (now - lastTapRef.current < 300) return;
  lastTapRef.current = now;
  cycleNext();
}, [cycleNext]);
```

**Alternatives Considered**:
- lodash.debounce: Adds dependency for simple use case
- Animated delay: More complex, unnecessary

---

### 4. Press Feedback Animation

**Decision**: Use `moti` for subtle scale animation on press.

**Rationale**:
- Already in tech stack (per tech-stack-preferences.txt)
- Respects reduced-motion preferences via `useReducedMotion`
- Provides calm, non-jarring feedback per Design System

**Implementation**:
```typescript
import { MotiPressable } from 'moti/interactions';
import { useReducedMotion } from 'react-native-reanimated';

const AffirmationCard = () => {
  const reducedMotion = useReducedMotion();
  
  return (
    <MotiPressable
      animate={({ pressed }) => ({
        scale: pressed && !reducedMotion ? 0.98 : 1,
      })}
      transition={{ type: 'timing', duration: 100 }}
      onPress={handleTap}
    >
      {/* content */}
    </MotiPressable>
  );
};
```

**Alternatives Considered**:
- Pressable with opacity: Less refined feel
- TouchableOpacity: Deprecated pattern in modern RN

---

### 5. Accessibility Implementation

**Decision**: Use `accessibilityRole="button"` with dynamic `accessibilityLabel`.

**Rationale**:
- Button role indicates tappable element to screen readers
- Dynamic label announces current affirmation text
- Hint explains the tap action

**Implementation**:
```typescript
<MotiPressable
  accessibilityRole="button"
  accessibilityLabel={`Affirmation: ${affirmation.text}`}
  accessibilityHint="Tap to see another affirmation"
>
```

**Alternatives Considered**:
- accessibilityRole="text": Doesn't convey interactivity
- Custom accessibility actions: Overkill for simple tap

---

### 6. Fallback Affirmation

**Decision**: Hardcode a default affirmation as first element, never remove it.

**Rationale**:
- Guarantees non-empty state
- No runtime error possible from empty array
- Simplest implementation

**Implementation**:
```typescript
const AFFIRMATIONS: Affirmation[] = [
  { id: 'default', text: 'You are doing your best.' },
  // ... other affirmations
];
// Array is const, never mutated, always has at least 1 element
```

**Alternatives Considered**:
- Runtime check with fallback: Adds complexity
- Optional chaining: Masks potential bugs

---

## Summary

All technical unknowns resolved. No NEEDS CLARIFICATION items remain. Ready for Phase 1 (data model and contracts).

| Topic | Decision | Complexity |
|-------|----------|------------|
| Daily rotation | Day-of-year modulo | Low |
| State management | Local useState | Low |
| Tap debounce | useRef timestamp | Low |
| Press feedback | moti MotiPressable | Low |
| Accessibility | Button role + dynamic label | Low |
| Fallback | Hardcoded default | Low |

**Total Estimated Complexity**: Low — straightforward component implementation.
