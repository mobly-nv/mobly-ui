module.exports = {
	extends: 'stylelint-config-standard',
	plugins: [
		'stylelint-scss',
	],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [true, {
			ignoreAtRules: [
				'tailwind',
				'apply',
				'variants',
				'responsive',
				'screen',
			],
		}],

		'declaration-empty-line-before': ['always', {
			ignore: ['after-comment', 'after-declaration', 'first-nested'],
		}],
		indentation: 'tab',

	}
};
