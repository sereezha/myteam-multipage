import React from 'react';
import ErrorMessage from '../error-message/error-message';
import s from './styles.module.scss';

const Field = ({ name, children, errorMessage }) => {
	return (
		<label className={s.field}>
			{children}
			{errorMessage && (
				<span className={s.errorMessage}>
					<ErrorMessage id={`${name}-error`}>{errorMessage}</ErrorMessage>
				</span>
			)}
		</label>
	);
};

export default Field;
