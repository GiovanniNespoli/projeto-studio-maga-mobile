module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',

        {
          root: ['./src'],
          extensions: ['.ts', '.js', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@modules': './src/modules',
            '@routes': './src/routes',
            '@services': './src/services',
            '@styles': './src/styles',
            '@interfaces': './src/interfaces',
          }
        }
      ],
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        "moduleName": "@env"
      }]
    ],
  };
};
