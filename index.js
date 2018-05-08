module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'include',
        'mixin'
      ]
    }],
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global']
    }],
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'indentation': 2,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'max-empty-lines': 1,
    'string-quotes': 'double',
    'property-no-unknown': [true, {
      ignoreProperties: ['composes']
    }],
    'length-zero-no-unit': true,

    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never'
  }
};
