import React, { useEffect, useState } from "react";
import countries from "@/websitecontent/contries";
import logo from "../assets/logo.png";
import axios from "axios";
import Alert from "./Alert";
import Image from "next/image";

const Query = () => {
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
		const { name, email, mobile, country, message } = data;
		if (!name || !email || !mobile || !message || !country) {
			setText("All feildes are medatory");
		} else if (mobile.length !== 10) {
			setText("Please enter correct mobile number");
		} else {
			try {
				setStatus("Sending");
				const response = await axios.post(`/api/mail/query`, {
					name,
					email,
					mobile: `+${country}-${mobile}`,
					message,
				});
				setStatus("Submit");
				setText(response.data.message);
			} catch (error) {
				setStatus("Submit");
			}
		}
	};

	useEffect(() => {
		setTimeout(() => setText(""), 3000);
	}, [text]);

	return (
		<>
			<Image alt="logo" src={logo} width={100} className="mt-1" />
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
			<textarea
				name="message"
				className="w-72 bg-slate-800 mt-2 px-2 border-white border-2"
				placeholder="Message"
				onChange={(e) => handleChange(e)}
				rows="5"
			></textarea>
			<button
				className="mt-4 border-2 shadow-md shadow-white active:translate-y-1 active:shadow-none transition-all duration-500 px-4 rounded-md py-1 hover:opacity-80  hover:text-white"
				onClick={handleSubmit}
			>
				{status}
			</button>
		</>
	);
};

export default Query;
