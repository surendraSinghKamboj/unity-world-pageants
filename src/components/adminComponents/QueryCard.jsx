import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const QueryCard = ({ name, email, mobile, message }) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			style={{ backgroundImage: "url(/bgQueryCard.jpg)" }}
			className="w-[400px] px-2 py-3 m-3 text-white h-[200px] relative hover:shadow-2xl shadow-slate-800 rounded-2xl"
		>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Name</h3>
				<p>{name}</p>
			</div>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Email</h3>
				<p>{email}</p>
			</div>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Mobile</h3>
				<p>{mobile}</p>
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="border-2 border-white px-2 hover:opacity-80 active:opacity-50 rounded-xl m-2"
			>
				View Message
			</button>
			{open ? (
				<div className="absolute bg-[#350200] w-[400px] h-[200px] p-3 top-0 left-0 ">
					<AiOutlineClose
						className="text-right cursor-pointer bg-red-700 rounded-full "
						onClick={() => setOpen(false)}
					/>
					<p>{message}</p>
				</div>
			) : null}
		</div>
	);
};

export default QueryCard;
