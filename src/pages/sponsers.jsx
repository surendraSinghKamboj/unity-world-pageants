import React from "react";
import { partners_carosel } from "@/assets";
import Image from "next/image";

const sponsers = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			{partners_carosel.map((item, index) => (
				<Image key={index} alt="partner" className="my-3" src={item} />
			))}
		</div>
	);
};

export default sponsers;
