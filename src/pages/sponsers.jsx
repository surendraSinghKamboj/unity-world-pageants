import React from "react";
import { partners_carosel } from "@/assets";
import Image from "next/image";
import Head from "next/head";
import { seoDescription } from "@/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sponsers = () => {
	return (
		<>
			<Head>
				<title>Unity World Pageants || Sponsers</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div className="flex w-[90%] m-auto flex-col py-4 justify-center items-center">
				<div className="bg-[#350200] w-full py-2">
					<h3 className="text-white text-center text-2xl">
						Sponsers and Partners
					</h3>
				</div>
				<div className="flex justify-center mt-4 items-center flex-wrap gap-4 md:gap-5">
					{partners_carosel.map((item, index) => (
						<Image
							key={index}
							alt="partners"
							src={item}
							className="md:w-72 w-28"
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default sponsers;
