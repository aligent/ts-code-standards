import eslint from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

const core = [
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
            'sort-imports': ['error'],
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': true,
                    'ts-nocheck': true,
                    'ts-check': true,
                },
            ],
        },
    },
];

const nextJs = [
    // TODO: TF2-9: Create a config specifically for React/Next
];

export const eslintConfigs = { core, nextJs };

/** @type {import('prettier').Config} */
export const prettierConfig = {
    arrowParens: 'avoid',
    singleQuote: true,
    trailingComma: 'es5',
};
