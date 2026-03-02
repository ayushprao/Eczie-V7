let preset = "module:@react-native/babel-preset";

try {
  require.resolve("babel-preset-expo");
  preset = "babel-preset-expo";
} catch {
  // Expo preset not installed yet; fallback keeps Jest runnable.
}

module.exports = {
  presets: [preset],
};
