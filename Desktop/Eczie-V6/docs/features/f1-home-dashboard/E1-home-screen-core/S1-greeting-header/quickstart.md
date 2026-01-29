# Quickstart: Greeting Header

**Feature**: F1-E1-S1 Greeting Header  
**Date**: 2026-01-29  
**Estimated Effort**: 1-2 days

## Overview

Implement the Greeting Header component for the Home screen. This is a display-only component that shows:
1. Localized date label (e.g., "FRIDAY · JUNE 21")
2. Personalized greeting (e.g., "Welcome back, Ayush")
3. Streak badge (e.g., "8 days strong") - hidden when streak is 0
4. Eczie mascot illustration (decorative)

## Prerequisites

Before starting, ensure:
- [ ] React Native + Expo project is set up
- [ ] NativeWind is configured
- [ ] `@tanstack/react-query` is installed and configured
- [ ] `expo-localization` is installed
- [ ] `expo-linear-gradient` is installed
- [ ] `zod` is installed
- [ ] User authentication is working (to get profile data)
- [ ] Symptom log feature exists (to get streak data)

## Quick Implementation Steps

### Step 1: Create Schemas (15 min)

Copy `contracts/greeting-header.schema.ts` to `src/schemas/greeting.schema.ts`.

### Step 2: Create Date Formatter Utility (30 min)

```typescript
// src/utils/dateFormatter.ts
import * as Localization from 'expo-localization';

export function formatDateLabel(date: Date = new Date()): string {
  const locale = Localization.locale;
  
  const weekday = new Intl.DateTimeFormat(locale, { weekday: 'long' })
    .format(date)
    .toUpperCase();
  
  const monthDay = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' })
    .format(date)
    .toUpperCase();
  
  return `${weekday} · ${monthDay}`;
}
```

### Step 3: Create Data Hooks (45 min)

```typescript
// src/hooks/useUserProfile.ts
import { useQuery } from '@tanstack/react-query';
import { UserProfileSchema } from '../schemas/greeting.schema';

export function useUserProfile() {
  return useQuery({
    queryKey: ['profile', 'current'],
    queryFn: async () => {
      // Fetch from cache or Supabase
      const data = await fetchProfile();
      return UserProfileSchema.parse(data);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// src/hooks/useStreakCount.ts
import { useQuery } from '@tanstack/react-query';
import { StreakDataSchema } from '../schemas/greeting.schema';

export function useStreakCount() {
  return useQuery({
    queryKey: ['streak', 'current'],
    queryFn: async () => {
      const data = await fetchStreak();
      return StreakDataSchema.parse(data);
    },
    staleTime: Infinity, // Only invalidate on log save
  });
}
```

### Step 4: Create Subcomponents (1 hour)

```typescript
// src/components/home/GreetingHeader/DateLabel.tsx
export function DateLabel({ date }: { date: Date }) {
  const label = formatDateLabel(date);
  return (
    <Text className="text-xs text-gray-400 tracking-widest">
      {label}
    </Text>
  );
}

// src/components/home/GreetingHeader/GreetingText.tsx
export function GreetingText({ firstName }: { firstName: string | null }) {
  const greeting = formatGreeting(firstName);
  return (
    <Text className="text-2xl font-bold text-white mt-1">
      {greeting}
    </Text>
  );
}

// src/components/home/GreetingHeader/StreakBadge.tsx
export function StreakBadge({ count }: { count: number }) {
  if (count === 0) return null;
  const text = formatStreakText(count);
  return (
    <View className="bg-blue-500/20 px-3 py-1 rounded-full mt-2">
      <Text className="text-blue-400 text-sm font-medium">
        {text}
      </Text>
    </View>
  );
}

// src/components/home/GreetingHeader/MascotImage.tsx
export function MascotImage() {
  return (
    <Image
      source={require('../../../../assets/mascot.png')}
      className="w-24 h-24"
      accessibilityElementsHidden={true}
      importantForAccessibility="no"
    />
  );
}
```

### Step 5: Create Main Component (45 min)

```typescript
// src/components/home/GreetingHeader/GreetingHeader.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { useUserProfile } from '../../../hooks/useUserProfile';
import { useStreakCount } from '../../../hooks/useStreakCount';
import { DateLabel } from './DateLabel';
import { GreetingText } from './GreetingText';
import { StreakBadge } from './StreakBadge';
import { MascotImage } from './MascotImage';

export function GreetingHeader() {
  const { data: profile } = useUserProfile();
  const { data: streak } = useStreakCount();
  
  const firstName = profile?.firstName ?? null;
  const streakCount = streak?.currentStreak ?? 0;
  
  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e']}
      className="px-4 pt-safe pb-6"
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel={buildAccessibilityLabel(firstName, streakCount)}
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <DateLabel date={new Date()} />
          <GreetingText firstName={firstName} />
          <StreakBadge count={streakCount} />
        </View>
        <MascotImage />
      </View>
    </LinearGradient>
  );
}

function buildAccessibilityLabel(firstName: string | null, streakCount: number): string {
  const greeting = formatGreeting(firstName);
  const date = formatDateLabel(new Date());
  const streak = streakCount > 0 ? formatStreakText(streakCount) : '';
  return [greeting, date, streak].filter(Boolean).join('. ');
}
```

### Step 6: Write Tests (1 hour)

```typescript
// src/components/home/GreetingHeader/GreetingHeader.test.tsx
import { render, screen } from '@testing-library/react-native';
import { GreetingHeader } from './GreetingHeader';

describe('GreetingHeader', () => {
  it('displays personalized greeting with name', () => {
    // Mock useUserProfile to return { firstName: 'Ayush' }
    render(<GreetingHeader />);
    expect(screen.getByText('Welcome back, Ayush')).toBeTruthy();
  });

  it('displays fallback greeting when name is missing', () => {
    // Mock useUserProfile to return { firstName: null }
    render(<GreetingHeader />);
    expect(screen.getByText('Welcome back, friend')).toBeTruthy();
  });

  it('displays streak badge when streak > 0', () => {
    // Mock useStreakCount to return { currentStreak: 8 }
    render(<GreetingHeader />);
    expect(screen.getByText('8 days strong')).toBeTruthy();
  });

  it('hides streak badge when streak is 0', () => {
    // Mock useStreakCount to return { currentStreak: 0 }
    render(<GreetingHeader />);
    expect(screen.queryByText(/days? strong/)).toBeNull();
  });

  it('uses singular for 1 day streak', () => {
    // Mock useStreakCount to return { currentStreak: 1 }
    render(<GreetingHeader />);
    expect(screen.getByText('1 day strong')).toBeTruthy();
  });
});
```

## Acceptance Criteria Checklist

- [ ] Date displays in "WEEKDAY · MONTH DAY" format, localized
- [ ] Greeting shows "Welcome back, {firstName}"
- [ ] Greeting shows "Welcome back, friend" when name missing
- [ ] Streak badge shows "{N} days strong" when streak > 0
- [ ] Streak badge uses "1 day strong" for N=1
- [ ] Streak badge hidden when streak = 0
- [ ] Mascot illustration visible and decorative
- [ ] Screen reader announces greeting on load
- [ ] Header renders within 100ms
- [ ] Layout works on iPhone SE through iPhone Pro Max

## Common Issues

### Date not localizing
- Ensure `expo-localization` is installed
- Check that device locale is set correctly in simulator

### Streak not updating
- Verify `queryClient.invalidateQueries(['streak'])` is called after symptom log save

### Accessibility not working
- Test with VoiceOver (iOS) or TalkBack (Android)
- Ensure `accessible={true}` is set on container

## Files to Create

```
src/
├── components/home/GreetingHeader/
│   ├── GreetingHeader.tsx
│   ├── GreetingHeader.test.tsx
│   ├── DateLabel.tsx
│   ├── GreetingText.tsx
│   ├── StreakBadge.tsx
│   ├── MascotImage.tsx
│   └── index.ts
├── hooks/
│   ├── useUserProfile.ts
│   └── useStreakCount.ts
├── schemas/
│   └── greeting.schema.ts
└── utils/
    └── dateFormatter.ts
```

## Next Steps

After implementing this feature:
1. Run `/speckit.tasks` to generate detailed task breakdown
2. Integrate GreetingHeader into Home screen
3. Connect to real profile and streak data sources
