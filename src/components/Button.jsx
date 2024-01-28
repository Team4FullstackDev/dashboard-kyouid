import React from 'react';

const Button = ({ children, className, onClick }) => {
	return (
		<button
			className={`${className} px-5 py-2 bg-mod-color-orange-100 hover:bg-[#ff5a13] text-white font-semibold rounded`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
