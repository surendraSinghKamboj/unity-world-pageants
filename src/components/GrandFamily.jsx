/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import { partners_carosel } from "@/assets";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const GrandFamily = () => {
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);

	const scrollNow = (direction) => {
		const box = document.querySelector(".selector");
		const width = box.clientWidth;
		if (direction === "prev") {
			box.scrollLeft = box.scrollLeft - width;
		} else {
			box.scrollLeft = box.scrollLeft + width;
		}
	};

	return (
		<div className="relative mt-3 md:w-[80%] w-full m-auto">
			<button
				className="absolute top-1/2 left-[0] bg-slate-500 text-white px-3 rounded-lg"
				onClick={() => scrollNow("prev")}
			>
				<AiFillCaretLeft />
			</button>
			<button
				className="absolute top-1/2 right-2 bg-slate-500 text-white px-3 rounded-lg "
				onClick={() => scrollNow("next")}
			>
				<AiFillCaretRight />
			</button>
			<div
				className="flex gap-[2%] md:gap-[1%] selector w-full overflow-hidden scroll-smooth"
				onTouchStart={(e) => setStart(e.changedTouches[0].clientX)}
				onTouchEnd={(e) => {
					setEnd(e.changedTouches[0].clientX);
					if (start > end) {
						scrollNow("next");
					} else {
						scrollNow("prev");
					}
				}}
				onDragStart={(e) => setStart(e.clientX)}
				onDragEnd={(e) => {
					setEnd(e.clientX);
					if (start > end) {
						scrollNow("next");
					} else {
						scrollNow("prev");
					}
				}}
			>
				{partners_carosel.map((item, index) => (
					<Image
						key={index}
						alt="partners"
						src={item}
						className="md:w-[24%] w-[48%]  rounded-xl transition-all duration-300 hover:bg-[#300250] cursor-pointer shadow-inner shadow-slate-50 p-4 bg-[#350200]"
					/>
				))}
			</div>
		</div>
	);
};

export default GrandFamily;
