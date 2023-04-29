module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-styled-components'],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@api': './src/api',
            '@hooks': './src/hooks',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@contexts': './src/contexts',
            '@databases': './src/databases',
            '@themes': './src/global/themes',
            '@components': './src/components',
          },
        },
      ],
    ],
  };
};
