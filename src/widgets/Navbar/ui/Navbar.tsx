import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.mainLink}>{t('Home')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t('About')}</AppLink>
			</div>
		</div>
	);
};
