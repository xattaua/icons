module.exports = {
  removeDimensions: false,
  plugins: [
    'preset-default',
    'prefixIds',
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(width|height|fill|stroke|class)',
      },
    },
  ],
};
