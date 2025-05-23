import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';

const base = [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintPluginPrettier,
    {
        rules: {
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'TSEnumDeclaration',
                    message:
                        'Do not use TypeScript enums. Please use const enums instead. See: https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh for details.',
                },
            ],
            'sort-imports': ['off'],
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                },
            ],
            'array-callback-return': ['error', { checkForEach: true }],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    reportUsedIgnorePattern: true,
                },
            ],
            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'array-simple',
                },
            ],
        },
    },
];

const react = [
    ...base,
    reactPlugin.configs.flat.recommended,
    jsxA11yPlugin.flatConfigs.recommended,
    // `react-hooks` plugin doesn't support "flat configs" yet so it has to be wrapped in the compatibility layer
    {
        plugins: { 'react-hooks': fixupPluginRules(hooksPlugin) },
        rules: hooksPlugin.configs.recommended.rules,
    },
    {
        settings: { react: { version: 'detect' } },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-fragments': ['error'],
        },
    },
];

/**
 * Exported ESLint configurations.
 * @property {object} base - The base ESLint configuration.
 * @property {object} core - The base ESLint configuration.
 * @property {object} react - The React ESLint configuration.
 */
export const eslintConfigs = {
    base,
    /** @deprecated Use 'base' instead. */
    core: base,
    react,
};

/** @type {import('prettier').Config} */
export const prettierConfig = {
    arrowParens: 'avoid',
    singleQuote: true,
    trailingComma: 'es5',
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};
