
const OUT_DIR = 'dist';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `${OUT_DIR}/index.cjs`,
            format: 'cjs',
        },
        {
            file: `${OUT_DIR}/index.mjs`,
            format: 'es',
        },
    ],
};
