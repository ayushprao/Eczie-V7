/**
 * DateLabel Component
 * 
 * Displays the current date in localized "WEEKDAY · MONTH DAY" format.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-001: Display date in localized format
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { formatDateLabel } from '../../../utils/dateFormatter';

interface DateLabelProps {
  /** Date to display (defaults to current date) */
  date?: Date;
}

/**
 * Renders the date label for the greeting header.
 * 
 * @example
 * <DateLabel /> // Shows today's date
 * <DateLabel date={new Date('2026-06-21')} /> // Shows "FRIDAY · JUNE 21"
 */
export function DateLabel({ date = new Date() }: DateLabelProps) {
  const label = formatDateLabel(date);
  
  return (
    <Text style={styles.text} accessibilityLabel={label}>
      {label}
    </Text>
  );
}

export default DateLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#cbd5e1',
    letterSpacing: 1.5,
  },
});
