import React from 'react';
import { ROUTES } from '../../constants';
import Container from '../container';
import Logo from '../logo';
import NavLink from '../nav-link';
import SocialsList from '../socials-list';
import s from './styles.module.scss';

const Footer = ({ socials }) => {
	return (
		<footer className={s.footer}>
			<Container>
				<div className={s.wrapper}>
					<div className={s.footerLeft}>
						<div className={s.logo}>
							<Logo />
						</div>
						<nav className={s.nav}>
							<ul className={s.navList}>
								<li>
									<NavLink href={ROUTES.home}>home</NavLink>
								</li>
								<li>
									<NavLink href={ROUTES.aboutUs}>about</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className={s.footerCenter}>
						<address className={s.address}>
							987 Hillcrest Lane <br />
							Irvine, CA <br />
							California 92714 <br />
							<a href="tel:949-833-7432">Call Us: 949-833-7432</a>
						</address>
					</div>
					<div className={s.footerRight}>
						<div className={s.socials}>
							{!!socials?.length && <SocialsList links={socials} />}
						</div>
						<small className={s.copyright}>
							Copyright 2020. All Rights Reserved
						</small>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
