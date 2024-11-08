import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { fixupPluginRules } from '@eslint/compat';
import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import tsEslint from 'typescript-eslint';

const core = [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintConfigPrettier,
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
            'sort-imports': ['error'],
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                },
            ],
            'array-callback-return': ['error', { checkForEach: true }],
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', ignoreRestSiblings: true },
            ],
        },
    },
];

const react = [
    ...core,
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

export const eslintConfigs = { core, react };

/** @type {import('prettier').Config} */
export const prettierConfig = {
    arrowParens: 'avoid',
    singleQuote: true,
    trailingComma: 'es5',
    plugins: ['prettier-plugin-tailwindcss'],
};
