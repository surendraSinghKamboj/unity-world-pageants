import React, { useEffect, useState } from "react";
import slide_europe from "../assets/slide_europe.jpeg";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const contestents = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState([]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [view, setView] = useState(false);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [viewData, setViewData] = useState({});

	const handleView = (id) => {
		setView(true);
		const [item] = data.filter((item) => (item._id === id ? item : null));
		setViewData(item);
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
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

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {}, [view]);

	console.log(viewData);
	return (
		<>
			<div className="mt-1 uppercase py-2 text-white bg-[#350200] text-center">
				contestents
			</div>

			<div className="flex w-[90%] md:w-[80%] md:justify-start m-auto gap-4 mt-3 justify-center items-center flex-wrap">
				{data &&
					data.map((item) => {
						return (
							<div
								className="w-48 hover:shadow-md shadow-[#350200]"
								key={item._id}
							>
								<Image
									src={slide_europe}
									alt={item.name}
									className="rounded-xl"
								/>
								<p className="text-center">{item.name}</p>
								<button className="w-full text-center">Vote</button>
								<button
									className="w-full text-center"
									onClick={() => handleView(item._id)}
								>
									View Details
								</button>
							</div>
						);
					})}
			</div>

			{view ? (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					className="absolute md:flex md:flex-row gap-4 flex flex-col top-0 w-full min-h-screen bg-[#350200]"
				>
					<AiOutlineClose
						onClick={() => {
							setView(false);
							setViewData({});
						}}
						className="text-3xl text-white rounded-full cursor-pointer hover:text-black hover:rotate-180 transition-all duration-500 hover:bg-white absolute top-4 right-4"
					/>
					<div className="w-[40%] mt-[40px]">
						<Image alt={viewData.name} src={slide_europe} />
					</div>
					<div className="w-[60%] mt-[40px] text-white">
						<div className="flex">
							<p className="w-20">Name</p>
							<p className="ml-3">{viewData.name}</p>
						</div>
						<div className="flex">
							<p className="w-20">Title</p>
							<p className="ml-3">{viewData.title}</p>
						</div>
						<div className="flex">
							<p className="w-20">Age</p>
							<p className="ml-3">{viewData.age}</p>
						</div>
						<div className="flex">
							<p className="w-20">Occupation</p>
							<p className="ml-3">{viewData.occupation}</p>
						</div>
						<div className="flex">
							<p className="w-20">Height</p>
							<p className="ml-3">{viewData.height}cms</p>
						</div>
					</div>
				</motion.div>
			) : null}
		</>
	);
};

export default contestents;
