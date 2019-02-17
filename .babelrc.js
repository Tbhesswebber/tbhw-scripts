const babel = {
  presets: [
    '@babel/preset-stage-3',
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
};

module.exports = babel;
