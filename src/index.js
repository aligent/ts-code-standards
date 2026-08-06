import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import noBarrelFiles from 'eslint-plugin-no-barrel-files';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';

const base = [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...noBarrelFiles.configs['flat/recommended'],
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
    {
        files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                    disallowTypeAnnotations: true,
                },
            ],
        },
    },
];

const react = [
    ...base,
    {
        // `eslint-plugin-react` (7.37.5, the latest release) calls the removed
        // `context.getFilename()` API when resolving the React version, which throws
        // "Error while loading rule 'react/display-name'" on ESLint 10 whenever
        // `settings.react.version` is 'detect'. Wrapping the plugin with fixupPluginRules
        // restores the legacy context methods, so version detection keeps working.
        // Replace this object with `reactPlugin.configs.flat.recommended` once the plugin supports ESLint 10.
        ...reactPlugin.configs.flat.recommended,
        plugins: { react: fixupPluginRules(reactPlugin) },
    },
    jsxA11yPlugin.flatConfigs.recommended,
    hooksPlugin.configs.flat.recommended,
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
