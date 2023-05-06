import React, { useEffect, useState } from "react";
import countries from "@/websitecontent/contries";
import logo from "../assets/logo.png";
import axios from "axios";
import Alert from "./Alert";
import Image from "next/image";

const RegisterUser = ({ switcher }) => {
	const [text, setText] = useState("");
	const [status, setStatus] = useState("Submit");

	const inputs = [
		{ type: "text", name: "name", placeholder: "Full name" },
		{ type: "email", name: "email", placeholder: "E-mail" },
		{ type: "text", name: "mobile", placeholder: "Conatct number" },
	];

	const [data, setData] = useState({});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		const { name, email, mobile, country, password } = data;
		if (!name || !email || !mobile || !password || !country) {
			setText("All feildes are medatory");
		} else if (mobile.length !== 10) {
			setText("Please enter correct mobile number");
		} else {
			try {
				setStatus("Sending");
				const response = await axios.post(`/api/users/register`, {
					name,
					email,
					mobile: `+${country}-${mobile}`,
					password,
				});
				setStatus("Submit");
				setText(response.data.message);
				if (response.data.message === "Account created successfully.") {
					switcher("old");
				}
			} catch (error) {
				setStatus("Submit");
				console.log("error");
			}
		}
	};

	useEffect(() => {
		setTimeout(() => setText(""), 3000);
	}, [text]);

	return (
		<div className="flex flex-col justify-center items-center">
			<Alert text={text} />
			{inputs &&
				inputs.map(({ type, name, placeholder }, index) => (
					<input
						key={index}
						type={type}
						placeholder={placeholder}
						name={name}
						onChange={(e) => handleChange(e)}
						className="rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72"
					/>
				))}
			<select
				name="country"
				id="country"
				onChange={(e) => handleChange(e)}
				className="rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72"
			>
				<option value={null} className="text-white w-72 overflow-x-hidden">
					Select Country
				</option>
				{countries.map(({ countryName, code }, index) => (
					<option
						key={index}
						value={code}
						className="text-white w-72 overflow-x-hidden hover:bg-[#350200]"
					>
						{countryName}
					</option>
				))}
			</select>
			<input
				type={"password"}
				placeholder={"Enter Password"}
				name={"password"}
				onChange={(e) => handleChange(e)}
				className="rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72"
			/>
			<button
				className="mt-4 border-2 shadow-md shadow-white active:translate-y-1 active:shadow-none transition-all duration-500 px-4 rounded-md py-1 hover:opacity-80  hover:text-white"
				onClick={handleSubmit}
			>
				{status}
			</button>
		</div>
	);
};

export default RegisterUser;
