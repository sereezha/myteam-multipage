import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import SocialsList from '../../../socials-list';
import s from './styles.module.scss';
import { getIcon } from '../../../icons';

const LINKS = [
	{
		id: 'twitter',
		label: 'twitter',
		icon: 'twitter',
		href: 'twitter',
	},
	{
		id: 'linkedin',
		label: 'linkedin',
		icon: 'linkedin',
		href: 'linkedin',
	},
];

const CrossIcon = getIcon('cross');

const TeamMember = ({ member }) => {
	const { avatar, name, job, quote, socials } = member;
	const [isActive, setIsActive] = useState(false);

	const toggleActiveState = () => setIsActive((prevState) => !prevState);

	const classes = classNames(s.teamMember, {
		[s.active]: isActive,
	});

	return (
		<li className={classes}>
			<div className={`${s.card} ${s.front}`}>
				<div className={s.avatarWrapper}>
					<Image
						className={s.avatar}
						src={`/assets/${avatar}.jpg`}
						alt={`Photo of ${name}`}
						width={96}
						height={96}
					/>
				</div>
				<div className={s.name}>{name}</div>
				<div className={s.jobPosition}>{job}</div>
			</div>
			<div className={`${s.card} ${s.back}`}>
				<div className={`${s.name} ${s.back}`}>{name}</div>
				<div className={s.about}>
					<blockquote className={s.aboutQuote}>{quote}</blockquote>
					{!!socials?.length && <SocialsList links={socials} />}
				</div>
			</div>

			<button
				type="button"
				onClick={toggleActiveState}
				className={s.moreButton}
				aria-label={`${isActive ? 'Hide' : 'Show'} description of member`}
			>
				<CrossIcon className={s.moreButtonIcon} />
			</button>
		</li>
	);
};

export default TeamMember;
