const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		base: './src/scss/base.scss',
		components: './src/scss/components.scss',
		fonts: './src/scss/fonts.scss',
		utils: './src/scss/utils.scss',
		main: './src/scss/main.scss',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css',
		}),
		new OptimizeCssAssetsPlugin(),
	],
	module: {
		rules: [
			// {
			// 	test: /\.(jpg|png)$/,
			// 	include: [
			// 	resolvePath('public/assets/img'),
			// 	],
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			// If the limit is exceeded it will by default fallback to the file-loader
			// 			limit: 10000,
			// 			// file-loader options
			// 			name: '[path][name]-[hash:7].[ext]',
			// 			context: 'src',
			// 		},
			// 	},
			// },
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, 'src/scss'),
				],
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
};
