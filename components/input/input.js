import React from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const Input = (props) => {
	const {
		onChange,
		className,
		isTextArea,
		invalid,
		name,
		type = 'text',
		...otherProps
	} = props;
	const classes = classNames(s.input, className, {
		[s.textarea]: isTextArea,
		[s.invalid]: invalid,
	});

	const Tag = isTextArea ? 'textarea' : 'input';

	return (
		<Tag
			{...otherProps}
			type={isTextArea ? undefined : type}
			className={classes}
			onChange={onChange}
			id={`${name}-input`}
			name={name}
			aria-describedby={invalid ? `${name}-error` : undefined}
		/>
	);
};

export default Input;
