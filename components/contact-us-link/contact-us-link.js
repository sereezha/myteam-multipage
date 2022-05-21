import React from 'react';
import Link from 'next/link';
import Button from '../button';
import { ROUTES } from '../../constants';

const ContactUsLink = ({ appearance = 'primary-light' }) => {
	return (
		<Link href={ROUTES.contactUs} passHref>
			<Button appearance={appearance}>contact us</Button>
		</Link>
	);
};

export default ContactUsLink;
