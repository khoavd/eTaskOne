// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'], // Use React Native preset
    plugins: ['react-native-reanimated/plugin'], // Keep this for react-native-reanimated
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ['react-native-reanimated/plugin'],
//   };
// };
