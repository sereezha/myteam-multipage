import React from 'react';

const Burger = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="17"
			viewBox="0 0 20 17"
			{...props}
		>
			<path fillRule="evenodd" d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
		</svg>
	);
};

export default Burger;
