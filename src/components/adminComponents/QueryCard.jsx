import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import axios from "axios";

const QueryCard = ({ id, name, email, mobile, message }) => {
	const [open, setOpen] = useState(false);

	const updateQuery = async (id) => {
		console.log(id);
		try {
			const response = await axios.put(`/api/queries/update`, { id });
			if (response) {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			style={{ backgroundImage: "url(/bgQueryCard.jpg)" }}
			className="w-[400px] px-2 py-3 m-3 text-white h-[200px] relative transition-all duration-300 hover:shadow-2xl hover:shadow-red-800 rounded-2xl"
		>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Name</h3>
				<p>{name}</p>
			</div>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Email</h3>
				<a href={`mailto:${email}`}>
					<p>{email}</p>
				</a>
			</div>
			<div className="flex justify-start items-center">
				<h3 className="text-xl w-[100px]">Mobile</h3>
				<p>{mobile}</p>
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="border-2 border-white  px-2 hover:opacity-80 active:opacity-50 rounded-xl m-2"
			>
				View Message
			</button>
			{open ? (
				<motion.div
					initial={{ rotateY: 180, rotateZ: 180 }}
					animate={{ rotateY: 0, rotateZ: 0 }}
					className="absolute rounded-2xl bg-[#350200] w-[400px] h-[200px] p-3 top-0 left-0 "
				>
					<div className="flex justify-end gap-2">
						<AiOutlineClose
							className="text-right cursor-pointer bg-red-700 rounded-full "
							onClick={() => setOpen(false)}
						/>
						<TiTickOutline
							className="text-right cursor-pointer bg-green-700 rounded-full "
							onClick={() => updateQuery(id)}
						/>
					</div>
					<p>{message}</p>
				</motion.div>
			) : null}
		</div>
	);
};

export default QueryCard;
