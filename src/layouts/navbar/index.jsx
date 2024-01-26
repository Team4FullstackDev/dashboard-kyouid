import React from 'react';
import SeacrhBar from '../../components/SeacrhBar';
import { SlCalender } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';
import Moment from '../../components/Moment';
const NavBar = () => {
	return (
		<>
			<div className="bg-white h-[70px] w-full flex flex-row justify-between items-center px-2">
				<div>
					<SeacrhBar className="w-[360px]" />
				</div>
				<div className="flex  flex-row gap-2 items-center ">
					<div className="w-56 h-10 bg-slate-100 flex flex-row justify-between p-2 items-center border rounded-md ">
						<Moment
							className={'text-sm font-medium text-nowrap'}
							format="LLL"
						/>
						<div className="border  p-1 shadow-md">
							<SlCalender size={20} />
						</div>
					</div>
					<div className="w-12 h-12 rounded-full border p-1 border-mod-color-orange-100 overflow-hidden ml-5">
						<img
							src="https://kyou.id/static/img/icon/Kousei_Mascot.svg"
							width={30}
							height={30}
							alt="profile"
						/>
					</div>
					<div className="flex gap-2 items-center justify-center cursor-pointer">
						<div className="flex pr-2 flex-col justify-center items-center bg-transparent ">
							<p className="text-md font-light ">Effenril</p>

							<p className="text-sm font-light text-slate-400">admin</p>
						</div>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
