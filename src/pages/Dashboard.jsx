import React from 'react';
import Title from '../components/Title';
import Box from '../components/Box';
import CardView from '../components/CardView';
import growth from '../assets/icons/growth.png';
import order from '../assets/icons/order.svg';
import avatar from '../assets/icons/avatar.svg';
import axios from 'axios';
import SeacrhBar from '../components/SeacrhBar';

const Dashboard = () => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		axios
			.get('https://dummyjson.com/users')
			.then((res) => {
				setData(res.data.users);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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

			<Box className="mt-5">
				<div className="grid grid-cols-12 grid-flow-row content-center">
					<div className="col-span-8 flex items-center">
						<Title>Rencent Orders</Title>
					</div>
					<div className="col-span-4">
						<SeacrhBar action="/orders" />
					</div>
				</div>
				<div className="overflow-scroll mt-5 max-h-80 p-1">
					<table className="table-auto w-full border border-collapse border-slate-100 rounded-t-sm">
						<thead>
							<tr className="bg-slate-100 p-5">
								<th>Costumer Name</th>
								<th>Products Name</th>
								<th>Qty</th>
								<th>Order Date</th>
								<th>Price</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{data.map((user) => {
								return (
									<>
										<tr key={user.id}>
											<td className="border">{user.firstName}</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</table>
				</div>
			</Box>
		</>
	);
};

export default Dashboard;
