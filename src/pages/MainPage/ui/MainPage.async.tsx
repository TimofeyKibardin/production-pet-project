import { lazy } from "react";

export const MainPageAsync =
    lazy(() => new Promise(resolve => {
        //@ts-expect-error Искуственно сделал для проверки чанков
        // В реальных проектах так делать нельзя!
        setTimeout(() => resolve(import('./MainPage')), 1500)
    }));