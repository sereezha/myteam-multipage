import React from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const Container = ({ children, type = 'normal' }) => (
	<div className={classNames(s.container, s[type])}>{children}</div>
);

export default Container;
