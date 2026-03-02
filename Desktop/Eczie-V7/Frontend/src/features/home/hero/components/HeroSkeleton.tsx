import React from "react";
import { StyleSheet, View } from "react-native";

export function HeroSkeleton(): JSX.Element {
  return (
    <View accessibilityLabel="Loading hero header" style={styles.container} testID="hero-skeleton">
      <View style={styles.date} />
      <View style={styles.greeting} />
      <View style={styles.badgeSlot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  date: {
    width: 130,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#DCE8F2",
  },
  greeting: {
    marginTop: 8,
    width: "75%",
    height: 32,
    borderRadius: 10,
    backgroundColor: "#DCE8F2",
  },
  badgeSlot: {
    marginTop: 14,
    width: 130,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#DCE8F2",
  },
});
