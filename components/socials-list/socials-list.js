import React from 'react';
import { getIcon } from '../icons';
import s from './styles.module.scss';

const SocialsList = ({ links }) => {
	return (
		<ul className={s.socialsList}>
			{links.map(({ href, value, label }) => {
				const Icon = getIcon(value);
				return (
					<li key={value}>
						<a
							className={s.socialsListLink}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
						>
							<Icon className={s.socialsIcon} aria-hidden="true" />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialsList;
