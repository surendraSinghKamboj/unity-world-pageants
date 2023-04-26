/* eslint-disable react-hooks/rules-of-hooks */
import AdminNavbar from "@/components/AdminNavbar";
import Uploadimage from "@/components/Uploadimage";
import Title from "@/components/adminComponents/Title";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const addcontestents = () => {
	const images = useSelector((result) => result.updateImages);
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
			name: "volunteerCharityProject",
			placeholder: "Reason for entering Pagent",
		},
	];
	const [data, setData] = useState({});

	const handleChange = (e) => {
		setData({
			data,
			[e.target.name]: e.target.value,
		});
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
				<div className="flex mt-2 justify-center w-[90%] m-auto items-center">
					{/* div left */}
					<div className="w-[50%] py-5 rounded-l-3xl  flex flex-col bg-[#350200] justify-center items-center">
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
					<div className="w-[50%]">{/* hobbies */}</div>
				</div>
			</div>
		</>
	);
};

export default addcontestents;
