import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import s from './styles.module.scss';

const IconButton = (props) => {
	const { iconGlyph, className, ...otherProps } = props;
	const classes = classNames(s.iconButton, className);
	return (
		<button {...otherProps} className={classes}>
			<Icon glyph={iconGlyph} />
		</button>
	);
};

export default IconButton;
