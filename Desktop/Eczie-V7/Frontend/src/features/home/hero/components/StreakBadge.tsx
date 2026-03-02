import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StreakBadgeProps = {
  streakCount: number;
};

function getStreakLabel(streakCount: number): string {
  return streakCount === 1 ? "1 day strong" : `${streakCount} days strong`;
}

export function StreakBadge({ streakCount }: StreakBadgeProps): JSX.Element | null {
  if (streakCount < 1) {
    return null;
  }

  return (
    <View accessibilityRole="summary" style={styles.badge} testID="hero-streak-badge">
      <Text style={styles.badgeText}>{getStreakLabel(streakCount)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minHeight: 44,
    minWidth: 120,
    borderRadius: 16,
    backgroundColor: "#E6F2FB",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1B5E8A",
  },
});
