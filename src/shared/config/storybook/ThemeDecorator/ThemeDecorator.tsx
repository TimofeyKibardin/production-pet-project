import React from "react";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: any, context: any) => (
    <div className={`app ${theme}`}>
        <Story {...context} />
    </div>
);