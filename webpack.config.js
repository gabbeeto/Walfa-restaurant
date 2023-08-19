path = require('path');
html = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [ new html({title:'Walfa Restaurant', template: './source/index.html' })],
	entry: './source/main.js',
	output:{ filename: 'main-[contenthash].js',
		path: path.resolve(__dirname, 'output'),
		clean: true,
		assetModuleFilename: '[name][ext]'
	},
	module: {
		rule:[{test: /\.css$/, use: ['style-loader', 'css-loader']},{test: /\.(png|ttf|otf)$/, type: 'asset/resource'}] 
	}
}
