
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonWebpackConfig = require("./webpack.common");
const packageJson = require("./package.json");
const { merge } = require("webpack-merge");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html"
        }
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

module.exports = merge(commonWebpackConfig, devConfig);