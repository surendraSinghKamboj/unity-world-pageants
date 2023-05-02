/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import React from "react";

const ContestantsCard = ({ data }) => {
	const { name, image, _id } = data;
	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`/api/contestents/delete?id=${id}`);
		} catch (error) {}
	};

	return (
		<div className="w-52 h-96 bg-[#350200] px-2 pt-2 rounded-xl">
			<img src={image} alt={name} className="rounded-t-xl" />
			<h3 className="text-white text-center">{name}</h3>
			<div className="w-full flex justify-center">
				<Link href={`/admin/updateContestants/${_id}`}>
					<button className="text-white rounded-xl border-2 bg-green-800 border-white hover:opacity-80 w-20 mt-2">
						Update
					</button>
				</Link>
			</div>
			<div className="w-full flex justify-center">
				<button
					onClick={() => handleDelete(_id)}
					className="text-white rounded-xl border-2 bg-red-800 border-white hover:opacity-80 w-20 mt-2"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ContestantsCard;
