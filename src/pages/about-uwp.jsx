/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

const about = () => {
	return (
		<motion.div
			initial={{ y: "100vh" }}
			animate={{ y: 0 }}
			className="min-h-[90vh]"
		>
			<div className="flex flex-col justify-center items-center py-52 md:w-[80%] bg-[#350200] mt-20 rounded-r-full">
				<h3 className="uppercase text-white text-lg font-semibold mb-8 underline-offset-2 underline md:text-left">
					About us
				</h3>
				<div className="w-[80%] m-auto">
					<p className="text-slate-50 text-justify">
						{`
							Unity World Pageants is a International beauty pageant franchise
							owned by Munporgindiapvt Ltd, a company based in India. The pageant
							aims to promote diversity, inclusivity, and empowerment of women
							from all walks of life across the world. The competition focuses on
							more than just physical beauty, but also on the contestants'
							intelligence, personality, and talent. Through various rounds of
							competition, the pageant provides a platform for women to showcase
							their skills, and raise awareness on important social causes. With
							its global presence, Unity World Pageants has become a prominent
							platform for women to celebrate their beauty, talent, and
							individuality, while advocating for positive change in society.
							`}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default about;
