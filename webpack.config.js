'use strict';
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let config = {
	entry: "./src/index.tsx",
	devtool: 'inline-source-map',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	performance: { hints: false },
	stats: { chunks: true },
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ "babel-loader" ]
			},
			{
				test: /\.(le|c|sc)ss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ],
	},
	devServer: {
		historyApiFallback: true,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin({
			test: /\.scss(\?.*)?$/i,
		})]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: 'index.html',
			inject: 'body'
		})
	]
};

module.exports = config;
