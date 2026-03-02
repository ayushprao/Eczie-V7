import React from "react";
import { StyleSheet, Text } from "react-native";

type DateLabelProps = {
  text: string;
};

export function DateLabel({ text }: DateLabelProps): JSX.Element {
  return (
    <Text accessibilityRole="text" style={styles.label} numberOfLines={1} testID="hero-date-label">
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    color: "#1E5A8A",
  },
});
