module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['include']
    }],
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global']
    }],
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'indentation': 2,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true
  }
};
