import eslint from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'eslint.config.mjs',
      'dist',
      'node_modules',
      'coverage',
      'commitlint.config.js'
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      import: eslintPluginImport
    }
  },
  {
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        }
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // TypeScript rules
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'default',
          'format': ['camelCase']
        },
        {
          'selector': 'variable',
          'format': ['camelCase', 'UPPER_CASE', 'PascalCase']
        },
        {
          'selector': 'property',
          'format': ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case']
        },
        {
          'selector': 'property',
          'modifiers': ['requiresQuotes'],
          'format': null
        },
        {
          'selector': 'parameter',
          'format': ['camelCase'],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'typeLike',
          'format': ['PascalCase']
        },
        {
          'selector': 'interface',
          'format': ['PascalCase'],
          'prefix': ['I']
        },
        {
          'selector': 'enumMember',
          'format': ['UPPER_CASE']
        }
      ],

      // Import rules
      'sort-imports': 'off',
      'import/no-unresolved': 'error',
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'unknown'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: 'sentry-instrument',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }],
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',

      // General code quality rules
      'max-len': ['error', {
        'code': 100,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignoreComments': true
      }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'no-param-reassign': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-trailing-spaces': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }]
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true
        }
      }
    }
  },
);
