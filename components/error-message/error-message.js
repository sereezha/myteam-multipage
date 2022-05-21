import React from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const ErrorMessage = ({ size = 'small', id, children }) => {
	const classes = classNames(s.errorMessage, s[size]);
	return (
		<span className={classes} id={id}>
			{children}
		</span>
	);
};

export default ErrorMessage;
