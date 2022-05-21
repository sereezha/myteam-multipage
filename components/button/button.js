import React, { forwardRef } from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

const Button = forwardRef((props, ref) => {
	const {
		children,
		disabled,
		appearance = 'primary-light',
		href,
		isLoading,
		...otherProps
	} = props;
	const Tag = href ? 'a' : 'button';
	const classes = classNames(s.button, s[appearance], {
		[s.primary]: appearance.includes('primary'),
		[s.loading]: isLoading,
		[s.disabled]: disabled,
	});

	return (
		<Tag
			{...otherProps}
			disabled={disabled}
			href={href || undefined}
			className={classes}
			ref={ref}
		>
			{children}
		</Tag>
	);
});

Button.displayName = Button;

export default Button;
