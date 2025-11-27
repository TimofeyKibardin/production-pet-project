import React from "react";
import 'app/styles/index.scss'

export const StyleDecorator = (Story: any, context: any) => {
    return <Story {...context} />;
};