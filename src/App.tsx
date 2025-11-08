import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import './styles/index.scss'

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


const App = () => {
    // Хук для переключения темы
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            {/*Переключение темы*/}
            <button onClick={toggleTheme}>TOGGLE</button>
            {/*Ссылки для перехода с одной страницы на другую*/}
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            {/*Пути*/}
            {/*Fallback пока страницы грузятся*/}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/*Асинхронные страницы при сборке выносим в чанки*/}
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;