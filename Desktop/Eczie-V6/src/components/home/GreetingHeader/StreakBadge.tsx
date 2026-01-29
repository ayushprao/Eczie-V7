/**
 * StreakBadge Component
 * 
 * Displays the user's current logging streak as a badge.
 * Hidden when streak count is 0.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-004: Display streak badge with proper pluralization
 * @see FR-005: Hide streak badge when count is 0
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatStreakText, shouldShowStreakBadge } from '../../../schemas/greeting.schema';

interface StreakBadgeProps {
  /** Current streak count (consecutive days with symptom log) */
  count: number;
}

/**
 * Renders the streak badge for the greeting header.
 * 
 * Features:
 * - Hidden when count is 0
 * - Shows "1 day strong" for count of 1
 * - Shows "{N} days strong" for count > 1
 * 
 * @example
 * <StreakBadge count={8} /> // "8 days strong"
 * <StreakBadge count={1} /> // "1 day strong"
 * <StreakBadge count={0} /> // renders nothing
 */
export function StreakBadge({ count }: StreakBadgeProps) {
  if (!shouldShowStreakBadge(count)) {
    return null;
  }
  
  const text = formatStreakText(count);
  
  return (
    <View style={styles.badge} accessibilityLabel={text}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

export default StreakBadge;

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#60a5fa',
  },
});
