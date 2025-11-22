import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t("page_error_message")}</p>
            <Button onClick={reloadPage}>
                {t("button_refresh_page")}
            </Button>
        </div>
    );
};