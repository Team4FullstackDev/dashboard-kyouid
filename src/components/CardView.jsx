import React from 'react';

const CardView = ({
	icon,
	iconSize,
	bgIcon,
	title,
	value,
	description,
	className,
}) => {
	return (
		<div
			className={`${className} flex flex-row items-center justify-between p-3  rounded-lg drop-shadow-sm`}
		>
			<div className="flex flex-col">
				<p className=" text-sm font-medium text-white">{title}</p>
				<p className="text-3xl mt-7 mb-3 font-bold text-white">{value}</p>
				<p className="text-white text-sm font-medium">{description}</p>
			</div>
			<div className="flex flex-col items-end">
				<div className="bg-white text-center mb-5 text-sm p-1 w-20 rounded-md font-semibold">
					+ 37.43%
				</div>
				<div className={`${bgIcon} p-1 rounded-full`}>
					<img src={icon} alt="report" width={iconSize} height={iconSize} />
				</div>
			</div>
		</div>
	);
};

export default CardView;
