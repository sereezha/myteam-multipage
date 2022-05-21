import React from 'react';
import HeaderNav from '../header-nav';
import SectionInner from '../section-inner';
import Heading from '../heading';
import LineAboveText from '../line-above-text';
import s from './styles.module.scss';

const AboutHeader = () => {
	return (
			<header className={s.aboutHeader}>
				<SectionInner className={s.aboutHeaderInner}>
					<div className={s.nav}>
						<HeaderNav />
					</div>
					<div className={s.content}>
						<div className={s.title}>
							<Heading as="h1" type="heading-1">
								About
							</Heading>
						</div>
						<div className={s.description}>
							<div className={s.lineAboveText}>
								<LineAboveText appearance="accent" />
							</div>
							<p>
								We help companies build dynamic teams made up of top global
								talent. Using our network of passionate professionals we drive
								innovation and deliver incredible outcomes. Talented, diverse
								teams shape the best products and experiences. We’ll bring those
								teams to you.
							</p>
						</div>
					</div>
				</SectionInner>
			</header>
	);
};

export default AboutHeader;
