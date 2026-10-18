import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

// Same hook checks that react-scripts used to enforce during the build
export default tseslint.config(
    { ignores: ['build'] },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: tseslint.parser,
        },
        plugins: { 'react-hooks': reactHooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
    },
);
