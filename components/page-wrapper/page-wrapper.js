import React from 'react';
import Footer from '../footer';
import s from './styles.module.scss';

const PageWrapper = ({ children, footerProps }) => {
	const { socials } = footerProps;
	return (
		<div className={s.pageWrapper}>
      {children}
			<Footer socials={socials} />
		</div>
	);
};

export default PageWrapper;
