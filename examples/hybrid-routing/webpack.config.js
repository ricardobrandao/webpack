var path = require("path");
var CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		// The entry points for the pages
		pageA: "./aEntry",
		pageB: "./bEntry",
		vendorBundle: ["./vendorA", "./vendorB"],

		// This file contains common modules but also the router entry
		"commons": "./router"
	},
	output: {
		path: path.join(__dirname, "js"),
		publicPath: "js/",
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new CommonsChunkPlugin({
			names: ["pageA", "pageB"],
			filename: "[name].bundle.js",
			children: true,
			deepChildren: true
		}),
		new CommonsChunkPlugin({
			names: ["vendorBundle", "commons"],
			filename: "[name].js"
		}),
		// Extract the webpack boostrapper
		new CommonsChunkPlugin({
			name: "webpackManifest",
			filename: "webpackManifest.js"
		})
	]
};
