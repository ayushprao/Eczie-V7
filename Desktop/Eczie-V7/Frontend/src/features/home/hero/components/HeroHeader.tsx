import React, { useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { mascotAssetMap, MascotAssetKey } from "../constants/mascotAssetMap";
import { useHomeHeroData, HeroDataDependencies } from "../hooks/useHomeHeroData";
import { DateLabel } from "./DateLabel";
import { GreetingText } from "./GreetingText";
import { HeroSkeleton } from "./HeroSkeleton";
import { StreakBadge } from "./StreakBadge";

type HeroHeaderProps = {
  deps?: HeroDataDependencies;
};

function resolveMascotSource(mascotKey: MascotAssetKey): number {
  return mascotAssetMap[mascotKey] ?? mascotAssetMap["eczie-calm"];
}

export function HeroHeader({ deps }: HeroHeaderProps): JSX.Element {
  const [mascotLoadFailed, setMascotLoadFailed] = useState(false);
  const { dateLabel, greetingText, streakCount, isLoading, mascotAssetKey } = useHomeHeroData(deps);

  const mascotSource = useMemo(() => resolveMascotSource(mascotAssetKey), [mascotAssetKey]);

  return (
    <View style={styles.wrapper} testID="hero-header">
      <View style={styles.background}>
        {isLoading ? (
          <HeroSkeleton />
        ) : (
          <View style={styles.content}>
            <DateLabel text={dateLabel} />
            <GreetingText text={greetingText} />
            <View style={styles.streakSlot}>
              {streakCount >= 1 ? <StreakBadge streakCount={streakCount} /> : null}
            </View>
          </View>
        )}
        {!mascotLoadFailed ? (
          <Image
            source={mascotSource}
            style={styles.mascot}
            resizeMode="contain"
            onError={() => setMascotLoadFailed(true)}
            testID="hero-mascot"
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    minHeight: 182,
    borderRadius: 24,
    backgroundColor: "#F2F8FD",
    overflow: "hidden",
    padding: 16,
  },
  background: {
    width: "100%",
    minHeight: 150,
    justifyContent: "flex-start",
  },
  content: {
    width: "100%",
    minHeight: 150,
    justifyContent: "flex-start",
  },
  mascot: {
    position: "absolute",
    left: 12,
    bottom: 6,
    width: 86,
    height: 86,
    opacity: 0.92,
  },
  streakSlot: {
    marginTop: 12,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
