const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-docs',
	],
	webpackFinal: async config => {
		config.resolve.extensions.push('.ts', '.tsx');
		config.module.rules.push(
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve('babel-loader'),
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true,
						},
					},
					'postcss-loader',
					'sass-loader',
				],
				include: path.resolve(__dirname, '../src'),
			}
		);

		return config;
	},
};
