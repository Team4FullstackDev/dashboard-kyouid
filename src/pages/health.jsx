import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Box from '../components/Box';
import Title from '../components/Title';
const Health = () => {
	const [health, setHealth] = useState({
		message: '',
		uptime: 0,
		timestamp: 0,
	});

	const fetchInfo = async () => {
		try {
			const response = await axios.get('/v1/health');
			setHealth(response.data.message.healthCheck);
			console.log(response);
		} catch (error) {
			// Penanganan kesalahan pada permintaan HTTP
			setHealth({
				message: error.message,
				uptime: 0,
				timestamp: 0,
			});
			console.error('Error fetching health information:', error.message);
		}
	};

	useEffect(() => {
		fetchInfo();

		const intervalId = setInterval(() => {
			fetchInfo();
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const timestamp = new Date(health.timestamp);

	if (health.message === 'OK') {
		return (
			<>
				<Box>
					<Title>Health Server</Title>
					<h2 className="text-xl font-semibold mt-5">
						Server Status:{' '}
						<span className="text-green-500">{health.message}</span>
					</h2>
					<h2>
						Uptime : jam {Math.floor(health.uptime / 3600)} Menit:{' '}
						{Math.floor((health.uptime % 3600) / 60)} detik:{' '}
						{Math.floor(health.uptime) % 60}
					</h2>
					<h2>
						timestamp : jam {timestamp.getHours()} Minutes:{' '}
						{timestamp.getMinutes()}
					</h2>
				</Box>
			</>
		);
	} else {
		return (
			<>
				<h1 className="text-red-500">Server Error = {health.message}</h1>
			</>
		);
	}
};

export default Health;
