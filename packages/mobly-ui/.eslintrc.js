const path = require('path');

module.exports = {
	root: true,
	parserOptions: {
		project: path.resolve(__dirname, './tsconfig.json'),
	},
	env: {
		node: true,
		browser: true,
		jest: true,
	},
	ignorePatterns: [
		'./*.js',
		'webpack.config.js',
	],
	extends: [
		path.resolve(__dirname, '../eslint-config-react-ts'),
	],
};
