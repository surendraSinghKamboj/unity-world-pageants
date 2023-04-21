import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navlinks = ({ display, pop }) => {
	const [hall, setHall] = useState(false);

	const links = [
		{ hyperLink: "/", title: "Home" },
		{ hyperLink: "/contestents", title: "Contestents" },
		{ hyperLink: "/category", title: "Category" },
		{ hyperLink: "/about-uwp", title: "About uwp" },
		{ hyperLink: "/sponsers", title: "sponsers" },
		{ hyperLink: "/registration", title: "Registration" },
	];

	return (
		<motion.div
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			className="w-full bg-[#350200] h-7 p-1"
		>
			<ul
				className={`m-auto ${
					display ? "block absolute left-0" : "hidden"
				} gap-3 w-full bg-[#350200] md:w-[558px] md:static items-center md:flex`}
			>
				{links &&
					links.length > 0 &&
					links.map(({ hyperLink, title }, index) => {
						if (title === "Hall of fame") {
							return (
								<div
									key={index}
									onMouseEnter={() => setHall(!hall)}
									onMouseLeave={() => setHall(!hall)}
									onClick={() => setHall(true)}
									className={`text-white cursor-pointer w-full flex md:w-[130px] relative uppercase`}
								>
									<span className="flex w-full justify-center">
										{title}
										<RiArrowDropDownLine className="text-lg" />
									</span>
									<div
										className={`absolute top-6 ${
											hall ? "block" : "hidden"
										} pb-2 bg-[#350200]`}
									>
										<li className="md:px-[50px] md:w-auto w-[100vw] text-center hover:bg-white hover:text-black cursor-pointer">
											2022
										</li>
										<li className="md:px-[50px] md:w-auto w-[100vw] text-center hover:bg-white hover:text-black cursor-pointer">
											2023
										</li>
									</div>
								</div>
							);
						}

						return (
							<Link href={hyperLink} key={index}>
								<li
									className={`text-white md:w-auto w-full text-center hover:opacity-80 uppercase`}
								>
									{title}
								</li>
							</Link>
						);
					})}
				<li
					className={`text-white cursor-pointer md:hidden md:w-auto w-full text-center hover:opacity-80 uppercase`}
					onClick={() => pop(true)}
				>
					Query
				</li>
			</ul>
		</motion.div>
	);
};

export default Navlinks;
