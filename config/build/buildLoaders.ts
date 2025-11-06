import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    // Если не используем TS - нужен babel-loader
    const typeScriptLoader = {
        // Правило будет обрабатывать файлы .ts и .tsx
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    esModule: true,
                    modules: {
                        auto: (resPath: string) => {
                            return Boolean(resPath.includes('.module.'));
                        },
                        namedExport: false,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]' :
                            '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [typeScriptLoader, cssLoader];
}