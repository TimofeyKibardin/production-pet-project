import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";


export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // Сборка index.html
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // Прогресс сборки
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        // Приложение без обновления страницы при разработке
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: isDev,
        }),
    ];
}