module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',

        {
          root: ['./src'],
          extensions: ['.ts', '.js', '.tsx', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@interfaces': './src/interfaces',
            '@modules': './src/modules',
            '@routes': './src/routes',
            '@services': './src/services',
            '@styles': './src/styles',
            '@utils': './src/utils',
          }
        }
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env"
      }],
    ],
  };
};
