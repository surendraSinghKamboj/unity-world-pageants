/* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";

const admin = () => {
	const { push } = useRouter();
	const [data, setData] = useState({});

	const feilds = [
		{ name: "email", placeholder: "Enter your email" },
		{ name: "password", placeholder: "Enter your password" },
	];

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		try {
			const response = await fetch("/api/admin/loginAuth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			if(result.status){
				console.log(1)
				push("/admin/Dashboard")
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<Head>
				<title>Admin || Login</title>
			</Head>
			<div
				style={{ backgroundImage: "url(/logo.png)" }}
				className="w-full bg-contain bg-slate-600 overflow-x-hidden h-screen flex justify-center items-center"
			>
				<motion.div
					initial={{ x: "400px" }}
					animate={{ x: 0 }}
					className="w-[80%] min-h-[60%] md:min-h-[80%] md:w-[50%] bg-[#350200] rounded-3xl flex flex-col justify-center items-center"
				>
					<MdAdminPanelSettings className="text-white text-8xl mb-6" />
					{feilds.map(({ name, placeholder }, index) => {
						return (
							<input
								key={index}
								type={name}
								name={name}
								placeholder={placeholder}
								onChange={handleChange}
								className="w-[80%] bg-slate-800 text-white border-2 border-white mt-3 rounded-xl px-3"
							/>
						);
					})}
					<button
						className="border-2 border-white px-3 text-white hover:opacity-80 rounded-xl mt-3"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</motion.div>
			</div>
		</>
	);
};

export default admin;
