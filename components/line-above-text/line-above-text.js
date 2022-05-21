import React from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const LineAboveText = ({ appearance = 'accent' }) => {
	const classes = classNames(s.lineAboveText, s[appearance]);
	return <div className={classes} />;
};

export default LineAboveText;
