/**
 * MascotImage Component
 * 
 * Displays the Eczie mascot illustration as a decorative element.
 * Marked as decorative for accessibility (not announced by screen readers).
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-003: Display mascot as decorative, non-interactive element
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

/**
 * Renders the Eczie mascot image in the greeting header.
 * 
 * Features:
 * - Decorative element (accessibilityElementsHidden)
 * - Responsive sizing (24x24 logical units)
 * - Non-interactive
 * 
 * @example
 * <MascotImage />
 */
export function MascotImage() {
  return (
    <Image
      // TODO: Replace with actual mascot asset path once available
      source={require('../../../../assets/moscot.png')}
      style={styles.mascot}
      accessibilityElementsHidden={true}
      importantForAccessibility="no"
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  mascot: {
    width: 80,
    height: 80,
  },
});

export default MascotImage;
