import React from 'react';
import Image from 'next/image';
import Heading from '../../../heading';
import s from './styles.module.scss';

const aboutUs = [
	{
		src: '/assets/icon-person.svg',
		description: 'The quality of our talent network',
	},
	{
		src: '/assets/icon-cog.svg',
		description: 'Usage & implementation of our software',
	},
	{
		src: '/assets/icon-chart.svg',
		description: 'How we help drive innovation',
	},
];

const About = () => {
	return (
		<div className={s.about}>
			<div className={s.mainTitle}>
				<Heading type="heading-1" as="h1">
					Contact
				</Heading>
			</div>
			<Heading
				className={s.secondaryTitle}
				appearance="accent"
				type="custom"
				as="h2"
			>
				Ask us about
			</Heading>
			<ul className={s.aboutList}>
				{aboutUs.map(({ src, description }) => (
					<li className={s.aboutListItem} key={src}>
						<div className={s.aboutListImage}>
							<Image
								alt=""
								aria-hidden="true"
								height={72}
								src={src}
								width={72}
							/>
						</div>
						<p className={s.aboutListDescription}>{description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default About;
