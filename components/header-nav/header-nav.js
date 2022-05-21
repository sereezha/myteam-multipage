import React, { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import s from './styles.module.scss';
import NavLink from '../nav-link';
import Logo from '../logo';
import ContactUsLink from '../contact-us-link';
import IconButton from '../icon-button/icon-button';
import { ROUTES } from '../../constants';

const CLASSES = {
	noScroll: 'no-scroll',
};

const HeaderNav = () => {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const router = useRouter();

	const showNav = () => {
		setIsNavVisible(true);
		document.body.classList.add(CLASSES.noScroll);
	};

	const hideNav = () => {
		setIsNavVisible(false);
		document.body.classList.remove(CLASSES.noScroll);
	};

	const listWrapperClasses = classNames(s.listWrapper, {
		[s.visible]: isNavVisible,
	});
	const contactUsClasses = classNames(s.listItem, s.contactUs);
	const closeButtonClasses = classNames(s.listItem, s.closeButtonItem);
	return (
		<nav className={s.headerNav} aria-label="Primary navigation">
			<div className={s.wrapper}>
				<div className={s.logo}>
					<Logo />
				</div>
				<div className={listWrapperClasses}>
					<div
						className={s.overlay}
						onClick={hideNav}
						role="button"
						aria-label="Close nav"
						aria-controls="header-nav-list"
						aria-expanded={isNavVisible.toString()}
					/>
					<ul className={s.list} id="header-nav-list">
						<li className={closeButtonClasses}>
							<div className={s.burger}>
								<IconButton
									type="button"
									aria-controls="header-nav-list"
									aria-expanded={isNavVisible.toString()}
									onClick={hideNav}
									iconGlyph="close"
								/>
							</div>
						</li>
						<li className={s.listItem}>
							<NavLink href={ROUTES.home} shouldBeActive>
								Home
							</NavLink>
						</li>
						<li className={s.listItem}>
							<NavLink href={ROUTES.aboutUs} shouldBeActive>
								About
							</NavLink>
						</li>
						{router.route !== ROUTES.contactUs && (
							<li className={contactUsClasses}>
								<ContactUsLink />
							</li>
						)}
					</ul>
				</div>
				<div className={s.burger}>
					<IconButton
						type="button"
						aria-controls="header-nav-list"
						aria-expanded={isNavVisible.toString()}
						onClick={showNav}
						iconGlyph="burger"
					/>
				</div>
			</div>
		</nav>
	);
};

export default HeaderNav;
