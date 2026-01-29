# Quickstart: Affirmation Card

**Feature**: S2-affirmation-card  
**Date**: 2026-01-29

## Prerequisites

- Node.js 18+
- Expo CLI installed
- Project dependencies installed (`npm install` or `yarn`)

## File Structure

After implementation, the following files will exist:

```
src/components/home/AffirmationCard/
├── AffirmationCard.tsx       # Main component
├── AffirmationCard.test.tsx  # Unit tests
├── useAffirmation.ts         # Custom hook for state management
├── affirmations.ts           # Static affirmation data
├── types.ts                  # TypeScript interfaces
└── index.ts                  # Barrel export
```

## Quick Implementation Steps

### 1. Create Types (`types.ts`)

```typescript
export type AffirmationCategory = 'calm' | 'strength' | 'patience' | 'acceptance' | 'self-care';

export interface Affirmation {
  id: string;
  text: string;
  category?: AffirmationCategory;
}
```

### 2. Create Static Data (`affirmations.ts`)

```typescript
import { Affirmation } from './types';

export const AFFIRMATIONS: Affirmation[] = [
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

### 3. Create Hook (`useAffirmation.ts`)

```typescript
import { useState, useCallback, useRef } from 'react';
import { AFFIRMATIONS } from './affirmations';

const getDailyAffirmationIndex = (listLength: number): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % listLength;
};

export const useAffirmation = () => {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getDailyAffirmationIndex(AFFIRMATIONS.length)
  );
  const lastTapRef = useRef<number>(0);

  const cycleNext = useCallback(() => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) return;
    lastTapRef.current = now;
    setCurrentIndex((prev) => (prev + 1) % AFFIRMATIONS.length);
  }, []);

  return {
    affirmation: AFFIRMATIONS[currentIndex],
    cycleNext,
  };
};
```

### 4. Create Component (`AffirmationCard.tsx`)

```typescript
import React from 'react';
import { Text, View } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import { useReducedMotion } from 'react-native-reanimated';
import { useAffirmation } from './useAffirmation';

export const AffirmationCard: React.FC = () => {
  const { affirmation, cycleNext } = useAffirmation();
  const reducedMotion = useReducedMotion();

  return (
    <MotiPressable
      onPress={cycleNext}
      animate={({ pressed }) => ({
        scale: pressed && !reducedMotion ? 0.98 : 1,
      })}
      transition={{ type: 'timing', duration: 100 }}
      accessibilityRole="button"
      accessibilityLabel={`Affirmation: ${affirmation.text}`}
      accessibilityHint="Tap to see another affirmation"
      className="bg-secondary-surface rounded-2xl p-4 mx-4"
    >
      <Text className="text-text-primary text-lg font-medium text-center">
        {affirmation.text}
      </Text>
      <Text className="text-text-secondary text-sm text-center mt-2">
        Tap for more affirmations
      </Text>
    </MotiPressable>
  );
};
```

### 5. Create Barrel Export (`index.ts`)

```typescript
export { AffirmationCard } from './AffirmationCard';
export { useAffirmation } from './useAffirmation';
export { AFFIRMATIONS } from './affirmations';
export type { Affirmation, AffirmationCategory } from './types';
```

### 6. Integrate in HomeScreen

```typescript
import { AffirmationCard } from '@/components/home/AffirmationCard';

// In HomeScreen component, add between GreetingHeader and SkinStatusSelector:
<AffirmationCard />
```

## Running Tests

```bash
# Run unit tests for this component
npm test -- --testPathPattern="AffirmationCard"

# Run with coverage
npm test -- --testPathPattern="AffirmationCard" --coverage
```

## Verification Checklist

- [ ] Card displays on Home screen below greeting header
- [ ] Affirmation text is visible and readable
- [ ] "Tap for more affirmations" hint is visible
- [ ] Tapping cycles to next affirmation
- [ ] Press feedback is subtle (scale animation)
- [ ] Same affirmation shows on same calendar day (initial load)
- [ ] VoiceOver/TalkBack announces card correctly
- [ ] Reduced motion preference is respected

## Dependencies

No new dependencies required. Uses existing:
- `moti` (for press animation)
- `react-native-reanimated` (for reduced motion detection)
- `nativewind` (for styling)
