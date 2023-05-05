/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Uploadimage from "@/components/Uploadimage";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import AdminNavbar from "@/components/AdminNavbar";

const updateContestants = () => {
	const dispatch = useDispatch();
	const { imgOne, imgTwo, imgThree } = useSelector(
		(result) => result.updateImages
	);
	const router = useRouter();
	const [data, setData] = useState({});
	const [hobbies, setHobbies] = useState();
	const [awards, setAwards] = useState();

	console.log(data);

	useEffect(() => {
		const getContestant = async (id) => {
			try {
				const response = await axios.get(
					`/api/contestents/getOneContestant?id=${id}`
				);
				if (response) {
					setData(response.data.response);
					setAwards(response.data.response.awards);
					setHobbies(response.data.response.hobbies);
				}
			} catch (error) {
				console.error(error);
			}
		};
		getContestant(router.query.id);
	}, [router.query.id]);

	useEffect(() => {
		if (hobbies) {
			setData({
				...data,
				hobbies: hobbies.join(", "),
			});
		}
	}, [hobbies]);

	useEffect(() => {
		if (awards) {
			setData({
				...data,
				awards: awards.join(", "),
			});
		}
	}, [awards]);

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
		{
			type: "text",
			name: "hobbies",
			placeholder: "Hobbies please seprate by comma(,)",
		},
		{
			type: "text",
			name: "awards",
			placeholder: "Awards please seprate by comma(,)",
		},
	];

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		const images = [imgOne, imgTwo, imgThree];
		const { hobbies } = data.hobbies;
		const { awards } = data.awards;
		console.log(hobbies, awards);
		setData({
			...data,
			images,
			hobbies,
			awards,
		});
		try {
			const response = await axios.put("/api/contestents/update", data);
			if (response) {
				router.push("/Dashboard");
			}
		} catch (error) {
			throw error;
		}
	};

	return (
		<div>
			<Head>
				<title>{data.name} || Update</title>
			</Head>
			<AdminNavbar />
			<Uploadimage fetched={data.images} />
			<div className="md:w-[70%] m-auto py-5 rounded-2xl bg-[#350200] flex flex-col justify-center items-center">
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
								: name === "hobbies"
								? data.hobbies
								: name === "awards"
								? data.awards
								: null
						}
						placeholder={placeholder}
						onChange={handleChange}
						className="w-[80%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
					/>
				))}

				<button
					onClick={handleSubmit}
					className="border-2 rounded-lg border-white bg-green-600 hover:opacity-80 cursor-pointer px-2 text-white"
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default updateContestants;
