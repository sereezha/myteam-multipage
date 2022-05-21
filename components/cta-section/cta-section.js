import React from 'react';
import SectionInner from '../section-inner';
import Heading from '../heading';
import ContactUsLink from '../contact-us-link';
import s from './styles.module.scss';

const CtaSection = () => (
	<section className={s.ctaSection}>
		<SectionInner className={s.ctaSectionInner} containerType="small">
			<div className={s.wrapper}>
				<Heading as="h2" type="heading-2" appearance="dark">
					Ready to get started?
				</Heading>
				<div className={s.button}>
					<ContactUsLink appearance="primary-dark" />
				</div>
			</div>
		</SectionInner>
	</section>
);

export default CtaSection;
