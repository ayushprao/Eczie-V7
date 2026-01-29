/**
 * GreetingHeader Component
 * 
 * Main hero header component for the Home screen.
 * Displays personalized greeting, localized date, streak badge, and mascot.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-009: Announce greeting via screen reader
 * @see FR-010: Fixed header with gradient background
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserProfile } from '../../../hooks/useUserProfile';
import { useStreakCount } from '../../../hooks/useStreakCount';
import { formatGreeting, formatStreakText } from '../../../schemas/greeting.schema';
import { formatDateLabel } from '../../../utils/dateFormatter';
import { DateLabel } from './DateLabel';
import { GreetingText } from './GreetingText';
import { StreakBadge } from './StreakBadge';
import { MascotImage } from './MascotImage';

/**
 * Build the accessibility label for screen readers.
 * Combines greeting, date, and streak information into a single announcement.
 */
function buildAccessibilityLabel(
  firstName: string | null | undefined,
  streakCount: number
): string {
  const greeting = formatGreeting(firstName);
  const date = formatDateLabel(new Date());
  const streak = streakCount > 0 ? formatStreakText(streakCount) : '';
  
  return [greeting, date, streak].filter(Boolean).join('. ');
}

/**
 * GreetingHeader - Hero header for the Home screen.
 * 
 * Features:
 * - Personalized greeting with user's first name
 * - Localized date display
 * - Gradient background
 * - Screen reader accessible
 * 
 * @example
 * <GreetingHeader />
 */
export function GreetingHeader() {
  const { data: profile } = useUserProfile();
  const { data: streak } = useStreakCount();
  
  const firstName = profile?.firstName ?? null;
  const streakCount = streak?.currentStreak ?? 0;
  
  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e']}
      style={styles.header}
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel={buildAccessibilityLabel(firstName, streakCount)}
      accessibilityLiveRegion="polite"
    >
      <DateLabel date={new Date()} />
      <GreetingText firstName={firstName} />
      <View style={styles.bottomRow}>
        <MascotImage />
        <StreakBadge count={streakCount} />
      </View>
    </LinearGradient>
  );
}

export default GreetingHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
