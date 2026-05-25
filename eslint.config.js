import { eslintConfigs } from './src/index.js';

export default [
    ...eslintConfigs.react,
    {
        settings: { react: { version: '18' } },
    },
    {
        files: ['prettier.config.js'],
        rules: { 'no-barrel-files/no-barrel-files': 'off' },
    },
    {
        ignores: ['dist/'],
    },
];
