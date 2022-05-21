import React from 'react';
import Image from 'next/image';
import SectionInner from '../section-inner';
import Heading from '../heading';
import LineAboveText from '../line-above-text';
import s from './styles.module.scss';

const benefits = [
	{
		src: '/assets/icon-person.svg',
		title: 'Experienced Individuals',
		description:
			'Our network is made up of highly experienced professionals who are passionate about what they do.',
	},
	{
		src: '/assets/icon-cog.svg',
		title: 'Easy to Implement',
		description:
			'Our processes have been refined over years of implementation meaning our teams always deliver.',
	},
	{
		src: '/assets/icon-chart.svg',
		title: 'Enhanced Productivity',
		description:
			'Our customized platform with in-built analytics helps you manage your distributed teams.',
	},
];

const BenefitsSection = () => {
	return (
		<section className={s.benefitsSection}>
			<SectionInner className={s.benefitsSectionInner} containerType="small">
				<div className={s.wrapper}>
					<div className={s.intro}>
						<LineAboveText />
						<div className={s.title}>
							<Heading type="heading-2" as="h2">
								Build & manage distributed teams like no one else.
							</Heading>
						</div>
					</div>
					<ul className={s.benefitsList}>
						{benefits.map(({ src, title, description }) => (
							<li className={s.benefitsItem} key={title}>
								<div className={s.benefitsImage}>
									<Image
										alt=""
										aria-hidden="true"
										height={72}
										src={src}
										width={72}
									/>
								</div>
								<div className={s.benefitsContent}>
									<div className={s.benefitsTitle}>
										<Heading appearance="accent" as="h3" type="heading-3">
											{title}
										</Heading>
									</div>
									<p className={s.benefitsDescription}>{description}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</SectionInner>
		</section>
	);
};

export default BenefitsSection;
