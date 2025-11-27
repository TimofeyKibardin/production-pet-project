import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(ts|tsx|js|jsx|tsx)"],

    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },

    webpackFinal: async (cfg) => {

        // alias для src
        cfg.resolve.modules = [
            ...(cfg.resolve.modules || []),
            path.resolve(__dirname, "..", "..", "src"),
        ];

        cfg.resolve.extensions.push(".ts", ".tsx");

        // убрать svg из стандартного asset loader
        cfg.module.rules = cfg.module.rules.map((rule: any) => {
            if (
                rule.test instanceof RegExp &&
                rule.test.test(".svg")
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        // добавить @svgr/webpack
        cfg.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        // добавить css/scss loader
        cfg.module.rules.push(buildCssLoader(true));

        return cfg;
    },
};

export default config;
