import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Конфигурация сторис
const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
};
export default meta;

// Тип для сторис
type Story = StoryObj<typeof Button>;

// Сторисы
export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Secondary: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
