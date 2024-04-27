const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonWebpackConfig = require("./webpack.common");
const packageJson = require("./package.json");
const { merge } = require("webpack-merge");

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap.js"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonWebpackConfig, prodConfig);