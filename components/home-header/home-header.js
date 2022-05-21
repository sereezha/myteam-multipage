import React from 'react';
import HeaderNav from '../header-nav';
import SectionInner from '../section-inner';
import Heading from '../heading';
import LineAboveText from '../line-above-text';
import s from './styles.module.scss';

const HomeHeader = () => {
	return (
		<header className={s.homeHeader}>
			<SectionInner className={s.homeHeaderInner}>
				<HeaderNav />
				<div className={s.content}>
					<div className={s.title}>
						<Heading as="h1" type="heading-0">
							Find the best <span className={s.titleAccent}>talent</span>
						</Heading>
					</div>
					<div className={s.description}>
						<div className={s.lineAboveText}>
							<LineAboveText appearance="secondary" />
						</div>
						<p>
							Finding the right people and building high performing teams can be
							hard. Most companies aren’t tapping into the abundance of global
							talent. We’re about to change that.
						</p>
					</div>
				</div>
			</SectionInner>
		</header>
	);
};

export default HomeHeader;
