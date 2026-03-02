import React from "react";
import { StyleSheet, Text } from "react-native";

type GreetingTextProps = {
  text: string;
};

export function GreetingText({ text }: GreetingTextProps): JSX.Element {
  return (
    <Text
      accessibilityRole="text"
      style={styles.greeting}
      numberOfLines={1}
      ellipsizeMode="tail"
      testID="hero-greeting"
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  greeting: {
    marginTop: 4,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
    color: "#123B5A",
  },
});
