/* Модули */
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.scss";
declare module "*.css";
declare module "*.svg" {
    import React from "react";
    const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVGComponent;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

/* Константы */
declare const __IS_DEV__: boolean;