import React, { useState } from "react";
import { motion } from "framer-motion";
import Navlinks from "./Navlinks";
import Image from "next/image";
import logo from "../assets/logo.png";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillYoutube,
	AiOutlineClose,
	AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
	const [lanMenu, setLanMenu] = useState(false);
	const [language, setLanguage] = useState("English");
	const [open, setOpen] = useState(false);
	const lan = ["English", "Hindi", "Indonasian", "Korean", "Chinease"];
	return (
		<motion.div
			initial={{ y: "-400px" }}
			animate={{ y: 0 }}
			className="bg-[#350200] z-10 sticky top-0"
		>
			<div className="flex justify-between m-auto items-center w-[90%]">
				{/* Logo in below div */}
				<div className="mt-2">
					<Image src={logo} width={100} alt="logo" className="rounded-2xl" />
				</div>
				{/* Brand Name Heading  */}
				<div>
					<h1 className="text-4xl hidden sm:inline cursor-pointer text-white">
						Unity World Pageants
					</h1>
				</div>
				{/* Social and login / register buttons and language option */}
				<div>
					<div>
						{!open ? (
							<AiOutlineMenu
								className="text-white text-2xl md:hidden"
								onClick={() => setOpen(!open)}
							/>
						) : (
							<AiOutlineClose
								className="text-white text-2xl md:hidden"
								onClick={() => setOpen(!open)}
							/>
						)}
					</div>
					{/* social buttons  */}
					<div className="md:flex hidden gap-2 w-32">
						<AiFillFacebook className="cursor-pointer text-2xl hover:opacity-80 text-white" />
						<AiFillInstagram className="cursor-pointer text-2xl hover:opacity-80 text-white" />
						<AiFillTwitterSquare className="cursor-pointer text-2xl hover:opacity-80 text-white" />
						<AiFillYoutube className="cursor-pointer text-2xl hover:opacity-80 text-white" />
					</div>
					{/* login / register button */}
					<div>
						<button className="bg-white hidden md:block md:w-32 px-2 md:hover:opacity-80 md:my-1">
							Login / Register
						</button>
					</div>
					{/* language options */}
					<div className="relative">
						<button
							className="border-2 hidden md:block w-32 bg-[#350200] hover:opacity-80 text-white px-1"
							onClick={() => setLanMenu(!lanMenu)}
						>
							Select Language
						</button>
						<div
							className={`absolute z-20 py-2 top-7 ${
								lanMenu ? "block" : "hidden h-0"
							} custom-lan-bg translate-x-[-50%] left-[50%]`}
						>
							{lan &&
								lan.map((item, index) => (
									<li
										key={index}
										onClick={() => {
											setLanguage(item);
											setLanMenu(!lanMenu);
										}}
										className="w-32 list-none cursor-pointer text-center text-white hover:text-black hover:bg-slate-100"
									>
										{item}
									</li>
								))}
						</div>
					</div>
				</div>
			</div>
			<Navlinks display={open} />
		</motion.div>
	);
};

export default Navbar;
