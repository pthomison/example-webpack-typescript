const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
var webpack = require('webpack')

var loadingRules = [
  {
    test: /\.css$/,
    use: [
    	'style-loader',
      'css-loader'
    ]
  }

]



module.exports = {
	entry: {
		index: './websrc/index.js',
	},
	output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
		path: path.resolve(__dirname) + "/web/",
    library: 'functions',
	},
	mode: 'development',
	// mode: 'production',
	module: {
		rules: loadingRules
	},
  devServer: {
    watchFiles: ['websrc/*.js', 'websrc/*.css','websrc/index.html'],
  },
	plugins: [
    new HtmlWebpackPlugin({
    	template: 'websrc/index.html'
    }),
  ],
	optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
};



