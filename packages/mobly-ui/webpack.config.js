const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/index.ts'),
	output: {
		filename: 'bundle.js',
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
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
			},
		],
	},
	// Exclude dependencies from bundle
	externals: {
		react: 'react',
	},
};
