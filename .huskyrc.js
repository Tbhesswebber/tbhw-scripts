hooksRules = {
  hooks: {
    'pre-commit': 'npm run validate',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};

module.exports = hooksRules;
