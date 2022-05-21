import React from 'react';
import SectionInner from '../section-inner';
import Form from '../form';
import About from './components/about';
import s from './styles.module.scss';

const ContactContent = () => {
	return (
		<div className={s.contactContent}>
			<SectionInner className={s.contactContentInner}>
				<div className={s.wrapper}>
					<About />
					<Form />
				</div>
			</SectionInner>
		</div>
	);
};

export default ContactContent;
