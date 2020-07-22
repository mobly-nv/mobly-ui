const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.(js|mdx)'],
	addons: ['@storybook/addon-docs'],
	webpackFinal: async config => {
		config.module.rules.push(
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
					'sass-loader',
				],
				include: path.resolve(__dirname, '../src'),
			}
		);

		return config;
	},
};
