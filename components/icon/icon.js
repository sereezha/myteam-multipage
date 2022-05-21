import React from 'react';
import { getIcon } from '../icons';

const Icon = ({ glyph, ...otherProps }) => {
	const Icon = getIcon(glyph);

	if (!Icon) return null;

	return <Icon {...otherProps} />;
};

export default Icon;
