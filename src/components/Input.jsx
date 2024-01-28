import React from 'react';

const Input = ({
	label,
	type,
	placeholder,
	onChange,
	name,
	cols,
	rows,
	className = 'w-1/2 mt-1 mb-3 p-2 font-medium bg-slate-100 border shadow border-zinc-200 focus:outline-none rounded-md',
}) => {
	return (
		<div className="flex flex-col mb-4">
			<label>{label}</label>
			{type === 'textarea' ? (
				<textarea
					name={name}
					cols={cols}
					rows={rows}
					className={className}
					onChange={onChange}
				></textarea>
			) : (
				<input
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					className={className}
				/>
			)}
		</div>
	);
};

export default Input;
