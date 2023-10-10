module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['chore', 'ci', 'feat', 'fix', 'docs', 'perf', 'refactor', 'revert'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 80],
    'subject-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      /* Add issue tickets if you need */
      'issue-prefixes': ['IC-'],
    },
  },
};
