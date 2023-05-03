/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import Head from "next/head";
import { seoDescription } from "@/websitecontent/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import LoginUser from "@/components/LoginUser";
import RegisterUser from "@/components/RegisterUser";

const contestents = () => {
	const [data, setData] = useState([]);
	const [view, setView] = useState(false);
	const [viewData, setViewData] = useState({});
	const [fetchedImages, setFetchedImages] = useState([]);
	const [viewImage, setViewImage] = useState("");
	const [voting, setVoting] = useState(false);
	const [logPage, setLogPage] = useState(false);
	const [type, setType] = useState("new");

	const handleView = async (id) => {
		setView(true);
		const [item] = data.filter((item) => (item._id === id ? item : null));
		setViewData(item);
		try {
			const res = await axios.get(`/api/contestents/getImages?id=${id}`);
			if (res) {
				const fetchedImagesResult = res.data.response.images;
				setViewImage(fetchedImagesResult[0]);
				setFetchedImages(fetchedImagesResult);
			}
		} catch (error) {
			console.log("fail to fetch images");
		}
	};

	useEffect(() => {
		const getSetting = async () => {
			try {
				const response = await axios.get("/api/settings/voting");
				if (response) {
					setVoting(response.data.status);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getSetting();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get("/api/contestents/toClient");
				if (result) {
					setData(result.data);
				}
			} catch (error) {}
		};
		fetchData();
	}, []);

	return (
		<>
			<Head>
				<title>Unity World Pageants || Contestents</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{logPage ? (
				<section className="fixed translate-x-[-50%] border-2 border-white translate-y-[-50%] text-white bg-[#350200] top-[50%] left-[50%] md:w-1/2 h-[80vh] w-[90%]">
					<div className="relative">
						<AiFillCloseCircle
							onClick={() => setLogPage(false)}
							className="absolute right-1 top-1 hover:rotate-180 text-white hover:scale-110 transition-all duration-500 cursor-pointer"
						/>
					</div>
					<div className="flex flex-col justify-around items-center mt-3">
						<div className="flex w-full justify-around items-center mt-3">
							<li
								onClick={() => setType("new")}
								className="list-none cursor-pointer"
							>
								Register
							</li>
							<li
								onClick={() => setType("old")}
								className="list-none cursor-pointer"
							>
								Login
							</li>
						</div>
						<div className="relative h-1 w-full bg-slate-800">
							<div
								className={`w-[50%] transition-all duration-500 absolute h-1 bg-white ${
									type === "new" ? "left-0" : "left-[50%]"
								}`}
							></div>
						</div>
						<Image src={logo} alt="logo" width={100} />
					</div>
					<div>{type === "old" ? <LoginUser /> : <RegisterUser />}</div>
				</section>
			) : null}
			<div className="mt-1 uppercase py-2 text-white bg-[#350200] text-center">
				contestents
			</div>

			<div className="flex w-[90%] md:w-[80%] md:justify-center m-auto gap-4 mt-3 justify-center items-center flex-wrap">
				{data &&
					data.map((item) => {
						return (
							<div
								className="w-48 hover:shadow-md shadow-[#350200]"
								key={item._id}
							>
								<img src={item.image} alt={item.name} className="rounded-xl" />
								<p className="text-center">{item.name}</p>
								{/* <button className="w-full text-center">Vote</button> */}
								<button
									className="w-full bg-[#350200] text-white hover:opacity-80 my-3 text-center"
									onClick={() => handleView(item._id)}
								>
									View Details
								</button>
								{voting && (
									<button
										className="w-full bg-green-600 text-white hover:opacity-80 text-center"
										onClick={() => setLogPage(true)}
									>
										Vote Now
									</button>
								)}
							</div>
						);
					})}
			</div>

			{view ? (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					className="md:flex md:flex-row gap-4 flex flex-col fixed top-0 w-full min-h-screen bg-[#350200]"
				>
					<div className="md:flex md:w-[90%] md:flex-row m-auto gap-4 flex flex-col top-0 w-full min-h-screen bg-[#350200]">
						<AiOutlineClose
							onClick={() => {
								setView(false);
								setViewData({});
							}}
							className="text-3xl text-white rounded-full cursor-pointer hover:text-black hover:rotate-180 transition-all duration-500 hover:bg-white absolute top-4 right-4"
						/>
						<div className="w-[40%] mt-[40px] flex justify-center flex-col items-center">
							<img alt={viewData.name} src={viewImage} className="h-96" />
							<div className="flex justify-center gap-1 mt-2">
								{fetchedImages &&
									fetchedImages.map((item, index) => (
										<img
											key={index}
											src={item}
											alt={viewData.name}
											className={`w-[30%] rounded-xl ${
												viewImage === item
													? "opacity-100 scale-100"
													: "opacity-50 scale-75"
											} cursor-pointer transition-all duration-500`}
											onClick={() => setViewImage(item)}
										/>
									))}
							</div>
						</div>
						<div className="w-[60%] mt-[40px] text-white">
							<div className="flex">
								<p className="w-40">Name</p>
								<p className="ml-3">{viewData.name}</p>
							</div>
							<div className="flex">
								<p className="w-40">Title</p>
								<p className="ml-3">{viewData.title}</p>
							</div>
							<div className="flex">
								<p className="w-40">Age</p>
								<p className="ml-3">{viewData.age} Years</p>
							</div>
							<div className="flex">
								<p className="w-40">Height</p>
								<p className="ml-3">{viewData.height}cms</p>
							</div>
							<div className="flex">
								<p className="w-40">Occupation</p>
								<p className="ml-3">{viewData.occupation}</p>
							</div>
							<div className="flex">
								<p className="w-40">Hobbies</p>
								<div className="ml-3">
									{viewData.hobbies &&
										viewData.hobbies.map((item, index) => (
											<p key={index}>{item}</p>
										))}
								</div>
							</div>
							<div className="flex">
								<p className="w-40">Awards</p>
								<div className="ml-3">
									{viewData.awards &&
										viewData.awards.map((item, index) => (
											<p key={index}>{item}</p>
										))}
								</div>
							</div>
							<div className="flex">
								<p className="w-40">Biography</p>
								<p className="ml-4">{viewData.biography}</p>
							</div>
							<div className="flex">
								<p className="w-40">Volunteer / Charity Project</p>
								<p className="ml-4">{viewData.volunteerCharityProject}</p>
							</div>
							<div className="flex">
								<p className="w-40">Reason for entering the pageant</p>
								<p className="ml-4">{viewData.reasonForEnteringPageant}</p>
							</div>
						</div>
					</div>
				</motion.div>
			) : null}

			<Footer />
		</>
	);
};

export default contestents;
