import React from 'react';

const Cross = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
      {...props}
		>
			<path fillRule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z" />
		</svg>
	);
};

export default Cross;
