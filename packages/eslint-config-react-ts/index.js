module.exports = {
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': ['warn', {
			allowExpressions: true,
		}],

		'import/order': ['error', {
			alphabetize: { order: 'asc' },
			'newlines-between': 'always',
		}],
		'import/prefer-default-export': 'off',

		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'sort-imports': ['warn', {
			ignoreCase: true,
			ignoreDeclarationSort: true,
		}],
	},
	overrides: [
		{
			'files': ['**/*.tsx'],
			'rules': {
				'react/button-has-type': 'off',
				'react/jsx-props-no-spreading': 'off',
				'react/prop-types': 'off',
			},
		},
	],
};
