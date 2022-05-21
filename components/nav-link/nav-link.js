import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './styles.module.scss';

const NavLink = ({ children, href, shouldBeActive, type = 'header' }) => {
	const { asPath } = useRouter();
	const isCurrentPage = asPath === href;
	const classes = classNames(s.navLink, type, {
		[s['active']]: shouldBeActive && isCurrentPage,
	});

	return (
		<Link href={href}>
			<a className={classes} aria-current={isCurrentPage.toString()}>
				{children}
			</a>
		</Link>
	);
};

export default NavLink;
