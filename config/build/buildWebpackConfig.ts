import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        // Оптимизация в зависимости от этапа разработки приложения
        mode,
        // Стартовая точка приложения
        entry: paths.entry,
        // Куда и как мы будем делать сборку приложения
        output: {
            // Наименование файла с шаблоном
            filename: '[name].[contenthash].js',
            // Путь
            path: paths.build,
            // Очистка старых сборок
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            // Конфигурация лоадеров
            // Обработка файлов, которые выходят за рамки JS
            // (JPEG, CSS, GIF и прочее)
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        // Карта файлов, чтобы можно было видеть где ошибка в каком файле
        devtool: isDev ? 'inline-source-map' : undefined,
        // Сервер разработки
        devServer: isDev ? buildDevServer(options) : undefined
    };
}