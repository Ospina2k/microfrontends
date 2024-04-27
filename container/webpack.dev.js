const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonWebpackConfig = require("./webpack.common");
const packageJson = require("./package.json");
const { merge } = require("webpack-merge");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonWebpackConfig, devConfig);
