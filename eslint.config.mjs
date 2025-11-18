import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import i18nextPlugin from "eslint-plugin-i18next";
import markdown from "eslint-plugin-markdown";
import json from "eslint-plugin-json";
import { defineConfig } from "eslint/config";

export default defineConfig([
    //
    // === Основной блок для JS / TS / React ===
    //
    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            react: reactPlugin,
            "@typescript-eslint": tseslint.plugin,
            i18next: i18nextPlugin,
        },

        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactPlugin.configs.flat.recommended,
        ],

        settings: {
            react: {
                version: "detect",
                runtime: "automatic",
            },
        },

        rules: {
            // === Стиль ===
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "no-unused-vars": "warn",

            // === React ===
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/react-in-jsx-scope": "off",
            "react/require-default-props": "off",
            "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

            // === TS ===
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/no-explicit-any": "off",
            "max-len": ['error', { "ignoreComments": true }],

            // === Import rules ===
            "import/no-unresolved": "off",
            "import/extensions": "off",

            // === i18next ===
            "i18next/no-literal-string": ["error", {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to", "test-id", "role"],
            }],
        },
    },

    //
    // === JSON ===
    //
    {
        files: ["**/*.json"],
        plugins: { json },
        rules: {
            "json/*": "error",
        },
    },

    //
    // === Markdown ===
    //
    {
        files: ["**/*.md"],
        plugins: { markdown },
        processor: "markdown/markdown",
    },
]);