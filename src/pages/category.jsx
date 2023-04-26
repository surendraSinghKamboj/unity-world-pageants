import React from "react";
import { categoryData } from "@/data/category";
import CompetitionArea from "@/components/CompetitionArea";
import Image from "next/image";
import Head from "next/head";
import { seoDescription } from "@/websitecontent/content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const category = () => {
	return (
		<>
			<Head>
				<title>Unity World Pageants || Category</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div className="bg-[#350200] w-full">
				{categoryData &&
					categoryData.map(
						({ pageant_name, image, eligibility, philosophy }, index) => {
							return (
								<div
									key={index}
									className="md:w-[80%] w-[80%] py-4 m-auto text-white"
								>
									<Image alt={pageant_name} src={image} />
									<h3 className="py-5 text-slate-100 font-bold text-3xl">
										{pageant_name}
									</h3>
									{philosophy &&
										philosophy.map((item, index) => {
											return (
												<p key={index} className="mb-4 text-justify">
													{item}
												</p>
											);
										})}
									<h5>Eligibility</h5>
									<ul>
										{eligibility &&
											eligibility.map((item, index) => (
												<li key={index}>{item}</li>
											))}
									</ul>
								</div>
							);
						}
					)}
				<CompetitionArea />
			</div>
			<Footer />
		</>
	);
};

export default category;
