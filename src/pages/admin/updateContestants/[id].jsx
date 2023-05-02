/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Uploadimage from "@/components/Uploadimage";
import HobbiesComponent from "@/components/adminComponents/Hobbies";

const updateContestants = () => {
	const router = useRouter();
	const [data, setData] = useState({});

	useEffect(() => {
		const getContestant = async (id) => {
			try {
				const response = await axios.get(
					`/api/contestents/getOneContestant?id=${id}`
				);
				if (response) {
					setData(response.data.response);
				}
			} catch (error) {
				console.error(error);
			}
		};
		getContestant(router.query.id);
	}, [router.query.id]);

	const feilds = [
		{ type: "text", name: "name", placeholder: "Enter Name" },
		{ type: "number", name: "age", placeholder: "Enter Age" },
		{ type: "text", name: "occupation", placeholder: "Occupation" },
		{ type: "number", name: "height", placeholder: "Height" },
		{ type: "text", name: "biography", placeholder: "Biography" },
		{
			type: "text",
			name: "volunteerCharityProject",
			placeholder: "Voluteer Charity Project",
		},
		{
			type: "text",
			name: "reasonForEnteringPageant",
			placeholder: "Reason for entering Pagent",
		},
	];

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<Uploadimage fetched={data.images} />
			<div>
				{feilds.map(({ type, name, placeholder }, index) => (
					<input
						key={index}
						type={type}
						name={name}
						value={
							name === "name"
								? data.name
								: name === "age"
								? data.age
								: name === "occupation"
								? data.occupation
								: name === "height"
								? data.height
								: name === "biography"
								? data.biography
								: name === "volunteerCharityProject"
								? data.volunteerCharityProject
								: name === "reasonForEnteringPageant"
								? data.reasonForEnteringPageant
								: null
						}
						placeholder={placeholder}
						onChange={handleChange}
						className="w-[80%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
					/>
				))}
				<div>
					<HobbiesComponent title={"Hobbies"} />
					<HobbiesComponent title={"Awards"} />
				</div>
			</div>
		</div>
	);
};

export default updateContestants;
