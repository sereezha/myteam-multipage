import React from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const Heading = ({
	as = 'h1',
	type = 'heading-1',
	appearance = 'light',
	children,
  className
}) => {
	const classes = classNames(s.heading, s[type], s[appearance], className);
	const Tag = as;
	return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
