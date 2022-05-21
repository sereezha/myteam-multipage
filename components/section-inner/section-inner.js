import React from 'react';
import classNames from 'classnames';
import Container from '../container';
import s from './styles.module.scss';

const SectionInner = ({ className, children, containerType }) => {
	const classes = classNames(s.sectionInner, className);
	return (
		<div className={classes}>
			<Container type={containerType}>{children}</Container>
		</div>
	);
};

export default SectionInner;
