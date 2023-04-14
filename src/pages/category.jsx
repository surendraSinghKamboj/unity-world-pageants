import React from "react";
import { categoryData } from "@/data/category";
import CompetitionArea from "@/components/CompetitionArea";
import Image from "next/image";

const category = () => {
	return (
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
	);
};

export default category;
