import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeroHeader } from "./Frontend/src/features/home/hero/components/HeroHeader";

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heroWrap}>
          <HeroHeader />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#EAF3FA",
  },
  container: {
    padding: 16,
  },
  heroWrap: {
    width: "100%",
  },
});
