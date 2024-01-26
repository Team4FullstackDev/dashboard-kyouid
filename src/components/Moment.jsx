import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { useEffect } from 'react';

const Moment = ({ className, format = 'MMMM Do YYYY, h:mm:ss a' }) => {
	const [date, setDate] = useState();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(moment().locale('id').format(`${format}`));
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [date]);
	return (
		<>
			<p className={className}>{date}</p>
		</>
	);
};

export default Moment;
