module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none', // ⛔️ sinkron dengan prettier
        bracketSpacing: true,
        arrowParens: 'avoid',
        printWidth: 100
      }
    ],
    'comma-dangle': ['error', 'never'], // ⛔️ pastikan tidak ada koma terakhir
    'max-lines-per-function': ['warn', { max: 30, skipBlankLines: true, skipComments: true }],
    'max-len': ['warn', { code: 100, ignoreUrls: true, ignoreStrings: true }],
    'no-console': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
    'no-nested-ternary': 'warn',
    'no-duplicate-imports': 'error',
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandFirst: true }],
    'react/no-array-index-key': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ]
      }
    }
  ]
}
