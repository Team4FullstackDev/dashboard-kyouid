import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SeacrhBar = ({ className, action }) => {
	return (
		<form className={`${className} relative`} action={action}>
			<div className="relative">
				<input
					type="search"
					placeholder="Search"
					className="w-full p-2 font-medium bg-slate-100 border shadow border-zinc-200 focus:outline-none rounded-md"
				/>
				<CiSearch
					className="fill-black absolute translate-y-1/2 top-0 right-3 "
					size={23}
				/>
			</div>
		</form>
	);
};

export default SeacrhBar;
