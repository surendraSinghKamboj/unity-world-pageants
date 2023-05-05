/* eslint-disable react-hooks/rules-of-hooks */
import Uploadimage from "@/components/Uploadimage";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { registerValidator } from "../../validator/register";
import axios from "axios";
import Terms from "@/components/Terms";
import Head from "next/head";
import { seoDescription } from "@/websitecontent/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";

const registration = () => {
	const images = useSelector((result) => result.updateImages);
	const [chacked, setChacked] = useState(false);
	const { imgOne, imgTwo, imgThree } = images;
	const [prefix, setPrefix] = useState("");
	const [status, setStatus] = useState("Submit");
	const [terms, setTerms] = useState("");
	const [category, setCategory] = useState("");
	const [openPrefix, setOpenPrefix] = useState(false);
	const [openCategory, setOpenCategory] = useState(false);
	const [data, setData] = useState({});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (prefix, category) => {
		if (chacked) {
			if (prefix && category) {
				const readyData = {
					prefix: !prefix ? "null" : prefix,
					category: !category ? "null" : category,
					...data,
					imgOne,
					imgTwo,
					imgThree,
				};
				if (registerValidator(readyData)) {
					try {
						setStatus("Sending");
						const { data } = await axios.post("/api/mail/register", readyData);
						setStatus("Submit");
						if (data) {
							toast.success("Details Sent succeddfully.");
						}
					} catch (error) {
						setStatus("Submit");
					}
				}
			} else {
				console.log("there is a error");
			}
		} else {
			alert("Please accept terms & conditions");
		}
	};

	return (
		<>
			<Head>
				<title>Unity World Pageants || Registeration</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<ToastContainer />
			<div className="flex flex-col bg-[#350200] m-auto py-4 justify-center items-center w-full ">
				{terms ? <Terms close={setTerms} /> : null}
				<h3 className="mt-4 mb-10 text-white">Entry Form</h3>

				<Image alt="logo" src={logo} width={100} />
				<div className="md:w-[40%] mt-20 w-[80%]">
					<div
						onClick={() => setOpenPrefix(!openPrefix)}
						className="cursor-pointer text-white rounded-lg px-2 relative transition-all duration-300 border-white border-2 md:w-[40%] w-[80%]"
					>
						{prefix ? prefix : "Choose title"}
						<div
							className={`${
								openPrefix ? "block" : "hidden"
							} absolute z-20 bg-slate-200`}
						>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setPrefix("Miss")}
							>
								Miss
							</p>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setPrefix("Mrs")}
							>
								Mrs
							</p>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setPrefix("Ms")}
							>
								Ms
							</p>
						</div>
					</div>
				</div>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="First name"
					name="firstName"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Last name"
					name="lastName"
					onChange={handleChange}
				/>
				<input
					type="email"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="E-mail address"
					name="email"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Phone number without prefix"
					name="phone"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="City"
					name="city"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Zip"
					name="zip"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Country"
					name="country"
					onChange={handleChange}
				/>

				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Facebook handle"
					name="facebook"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Instagram handle"
					name="instagram"
					onChange={handleChange}
				/>

				<div className="md:w-[40%] w-[80%]">
					<div
						onClick={() => setOpenCategory(!openCategory)}
						className="cursor-pointer rounded-lg px-2 relative transition-all duration-300 text-white border-white border-2 md:w-[40%] w-[80%]"
					>
						{category ? category : "Choose category"}
						<div
							className={`${
								openCategory ? "block" : "hidden"
							} absolute z-20 bg-slate-200`}
						>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setCategory("Miss Unity World")}
							>
								Miss Unity World
							</p>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setCategory("Mrs Unity World")}
							>
								Mrs Unity World
							</p>
							<p
								className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
								onClick={() => setCategory("Ms Unity World")}
							>
								Ms Unity World
							</p>
						</div>
					</div>
				</div>
				<Uploadimage />
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Occupation"
					name="occupation"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Height"
					name="height"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Life ambition"
					name="lifeAmbition"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="Experience"
					name="experience"
					onChange={handleChange}
				/>
				<input
					type="text"
					className="md:w-[40%] bg-slate-800 text-white w-[80%] my-2 px-2 border-2 border-slate-100 rounded-lg"
					placeholder="National Director if any"
					name="nationalDirector"
					onChange={handleChange}
				/>
				<div className="flex justify-start gap-4 items-center md:w-[38%] w-[78%]">
					<input
						type="checkbox"
						name="terms"
						onClick={(e) => setChacked(!chacked)}
					/>
					<p className="text-white cursor-pointer text-lg">
						I accept{" "}
						<span
							className="text-blue-700 cursor-pointer text-lg"
							onClick={() => setTerms(true)}
						>
							terms & conditions
						</span>
					</p>
				</div>
				<button
					className="mt-4 border-2 shadow-md text-white shadow-white active:translate-y-1 active:shadow-none transition-all duration-500 px-4 rounded-md py-1 hover:opacity-80  hover:text-white"
					onClick={() => handleSubmit(prefix, category)}
				>
					{status}
				</button>
			</div>
			<Footer />
		</>
	);
};

export default registration;
