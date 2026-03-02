export type MascotAssetKey = "eczie-calm" | "eczie-empathetic";

export const mascotAssetMap: Record<MascotAssetKey, number> = {
  "eczie-calm": require("../../../../../assets/mascot/eczie.png"),
  "eczie-empathetic": require("../../../../../assets/mascot/eczie-empathetic.png"),
};
