import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

const core = [eslint.configs.recommended, ...tsEslint.configs.recommended, eslintPluginPrettier];

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
