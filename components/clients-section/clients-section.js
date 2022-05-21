import React from 'react';
import Image from 'next/image';
import SectionInner from '../section-inner';
import Heading from '../heading';
import s from './styles.module.scss';

const ClientsSection = () => (
	<section className={s.clientsSection}>
		<SectionInner className={s.clientsSectionInner}>
			<div className={s.wrapper}>
				<div className={s.title}>
					<Heading type="heading-2" as="h2">
						Some of our clients
					</Heading>
				</div>
				<ul className={s.clientsList}>
					<li className={s.clientsListItem}>
						<Image
							src="/assets/logo-the-verge.png"
							width={165}
							height={28}
							alt="The verge"
						/>
					</li>
					<li className={s.clientsListItem}>
						<Image
							src="/assets/logo-jakarta-post.png"
							width={184}
							height={23}
							alt="The Jakarta Post"
						/>
					</li>
					<li className={s.clientsListItem}>
						<Image
							src="/assets/logo-the-guardian.png"
							width={180}
							height={28}
							alt="The Guardian"
						/>
					</li>
					<li className={s.clientsListItem}>
						<Image
							src="/assets/logo-tech-radar.png"
							width={165}
							height={28}
							alt="Techradar"
						/>
					</li>
					<li className={s.clientsListItem}>
						<Image
							src="/assets/logo-gadgets-now.png"
							width={94}
							height={45}
							alt="Gadgets Now"
						/>
					</li>
				</ul>
			</div>
		</SectionInner>
	</section>
);

export default ClientsSection;
