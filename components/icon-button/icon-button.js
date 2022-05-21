import React from 'react';
import classNames from 'classnames';
import { getIcon } from '../icons';
import s from './styles.module.scss';

const IconButton = (props) => {
	const { iconGlyph, className, ...otherProps } = props;
	const classes = classNames(s.iconButton, className);
	const Icon = getIcon(iconGlyph);
	return (
		<button {...otherProps} className={classes}>
			<Icon />
		</button>
	);
};

export default IconButton;
