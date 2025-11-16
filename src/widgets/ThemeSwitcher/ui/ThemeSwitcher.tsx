import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/light-mode-switch-icon.svg";
import DarkIcon from "shared/assets/icons/dark-mode-switch-icon.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    // Хук для переключения темы
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );

};