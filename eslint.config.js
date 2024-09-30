import { eslintConfigs } from './src/index.js';

export default [
    ...eslintConfigs.react,
    {
        settings: { react: { version: '18' } },
    },
];
