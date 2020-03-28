module.exports = api => {
  api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ];

  const plugins = [];

  return {
    presets,
    plugins
  };
};
