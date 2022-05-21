import Facebook from './facebook';
import Twitter from './twitter';
import Pinterest from './pinterest';
import LinkedIn from './linkedin';
import Cross from './cross';
import Burger from './burger';
import Close from './close';

export const icons = {
	facebook: Facebook,
	twitter: Twitter,
	pinterest: Pinterest,
	linkedin: LinkedIn,
	cross: Cross,
	burger: Burger,
	close: Close,
};

export const getIcon = (icon) => icons[icon];

export const iconsList = Object.keys(icons);
