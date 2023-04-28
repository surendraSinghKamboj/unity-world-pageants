/* eslint-disable react-hooks/rules-of-hooks */
import AdminNavbar from "@/components/AdminNavbar";
import Uploadimage from "@/components/Uploadimage";
import HobbiesComponent from "@/components/adminComponents/Hobbies";
import Title from "@/components/adminComponents/Title";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const addcontestents = () => {
	const { imgOne, imgTwo, imgThree } = useSelector(
		(result) => result.updateImages
	);
	const title = useSelector((result) => result.title);
	const { Hobbies, Awards } = useSelector((result) => result.hobbies);
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
	const [data, setData] = useState({});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		const newData = {
			...data,
			images: [imgOne, imgTwo, imgThree],
			title,
			hobbies: Hobbies,
			awards: Awards,
		};
		try {
			const response = await axios.post("/api/contestents/fromClient", newData);
			if (response) {
				console.log(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<AdminNavbar />
			<div>
				<h3 className="w-full text-white text-xl bg-[#350200] text-center">
					Add Contestent
				</h3>
				<div>
					<Uploadimage />
				</div>
				<div className="flex flex-col mt-2 justify-center w-[90%] m-auto items-center">
					{/* div left */}
					<div className="w-[50%] py-5 flex flex-col bg-[#350200] justify-center items-center">
						<Title />
						{feilds.map(({ type, name, placeholder }, index) => (
							<input
								key={index}
								type={type}
								name={name}
								placeholder={placeholder}
								onChange={handleChange}
								className="w-[80%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
							/>
						))}
					</div>
					{/* div right */}
					<div className="w-[50%] py-5 flex flex-col bg-[#350200] justify-center items-center">
						{/* hobbies */}
						<HobbiesComponent title={"Hobbies"} />
						<HobbiesComponent title={"Awards"} />
					</div>
					<button
						onClick={handleSubmit}
						className="w-[40%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
					>
						Save
					</button>
				</div>
			</div>
		</>
	);
};

export default addcontestents;
