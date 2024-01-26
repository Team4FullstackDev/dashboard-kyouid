import React from 'react';
import Title from '../components/Title';
import Box from '../components/Box';
import CardView from '../components/CardView';
import growth from '../assets/icons/growth.png';
import order from '../assets/icons/order.svg';
import avatar from '../assets/icons/avatar.svg';

const Dashboard = () => {
	return (
		<>
			<Box>
				<Title>Overview</Title>
				<div className="grid grid-cols-3 grid-flow-row gap-5 pt-5">
					<CardView
						icon={growth}
						className="bg-[#5B99F3]"
						bgIcon="bg-[#5C99F3]"
						iconSize={90}
						title="Total Revenue"
						value="Rp 0"
						description="Current Month"
					/>
					<CardView
						icon={order}
						className="bg-[#FEC353]"
						bgIcon="bg-[#FFD587]"
						iconSize={100}
						title="Total Orders"
						value="Rp 0"
						description="Current Month"
					/>
					<CardView
						icon={avatar}
						className="bg-[#6CD78E]"
						bgIcon="bg-[#97E1B0]"
						iconSize={80}
						title="Total Customer"
						value="10 k"
						description="Current Month"
					/>
				</div>
			</Box>
		</>
	);
};

export default Dashboard;
