module.exports = {
	extends: '@mobly/stylelint-config-scss',
	rules: {
		'selector-pseudo-class-no-unknown': [true, {
			ignorePseudoClasses: ['global', 'local']
		}]
	}
};
