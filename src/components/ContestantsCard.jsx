/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const ContestantsCard = ({ data }) => {
	const { reload } = useRouter();
	const [id, setId] = useState("");
	const [pop, setPop] = useState(false);
	const { name, image, _id } = data;
	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`/api/contestents/delete?id=${id}`);
			if (response) {
				setPop(false);
				setId("");
				reload();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-52 h-96 bg-[#350200] px-2 pt-2 rounded-xl">
			{pop ? (
				<div className="w-[400px] h-[300px] justify-center rounded-xl items-center flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-700">
					<h3 className="text-white mt-8">Are you sure ?</h3>
					<div className="flex justify-evenly mt-20 w-full">
						<button
							className="w-14 py-1 hover:opacity-80 rounded-lg bg-green-600"
							onClick={() => {
								setId("");
								setPop(false);
							}}
						>
							No
						</button>
						<button
							className="w-14 py-1 hover:opacity-80 rounded-lg bg-red-600"
							onClick={() => handleDelete(id)}
						>
							Yes
						</button>
					</div>
				</div>
			) : null}
			<img src={image} alt={name} className="rounded-t-xl" />

			<h3 className="text-white text-center">{name}</h3>
			<div className="w-full flex justify-center">
				<Link href={`/Dashboard/updateContestants/${_id}`}>
					<button className="text-white rounded-xl border-2 bg-green-800 border-white hover:opacity-80 w-20 mt-2">
						Update
					</button>
				</Link>
			</div>
			<div className="w-full flex justify-center">
				<button
					onClick={() => {
						setId(_id);
						setPop(true);
					}}
					className="text-white rounded-xl border-2 bg-red-800 border-white hover:opacity-80 w-20 mt-2"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ContestantsCard;
