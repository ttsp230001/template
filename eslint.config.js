import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.node } },
	tseslint.configs.recommended,
	{
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab'],	
			'semi': ['error', 'never'],
			'no-undef': 'warn',
			'max-len': ['error', { code: 120 }]
		}
	}
])
