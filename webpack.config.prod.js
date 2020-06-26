const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const WebpackBaseConfig = require("./webpack.config");

module.exports = {
    mode: "production",
    ...WebpackBaseConfig,

    module: {
        ...WebpackBaseConfig.module,

        rules: [
            ...WebpackBaseConfig.module.rules,
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]"
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.join(__dirname, "src", "scss")]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        ...WebpackBaseConfig.plugins,
        new MiniCssExtractPlugin({
            filename: "styles.[hash].css"
        })
    ]
};