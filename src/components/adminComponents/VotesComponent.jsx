/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";
import sortByVotes from "../../../utils/sortVotes";

const VotesComponent = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		async function getVotes() {
			try {
				const response = await axios.get("/api/contestents/getVotes");
				if (response) {
					// console.log(response.data);
					setData(sortByVotes(response.data));
				}
			} catch (error) {
				console.log(error);
			}
		}
		// getVotes();
		setTimeout(() => getVotes(), 5000);
	}, [data]);
	return (
		<div className="space-y-8">
			<table className="text-center w-full border-collapse">
				<thead>
					<tr className="border">
						<th className="border-t border-b p-2">Rank</th>
						<th className="border-t border-b p-2">Photo</th>
						<th className="border-t border-b p-2">Name</th>
						<th className="border-t border-b p-2">Votes</th>
					</tr>
				</thead>
				<tbody className="text-white">
					{data &&
						data.map(({ name, image, votes }, index) => (
							<tr key={index} className="bg-[#350200] border">
								<td className="border-t border-b p-2 text-center">
									{index + 1}
								</td>
								<td className="border-t border-b p-2 text-center">
									<img
										src={image}
										alt={name}
										width={100}
										height={100}
										className="rounded-full"
									/>
								</td>
								<td className="border-t border-b p-2 text-center">{name}</td>
								<td className="border-t border-b p-2 text-center">{votes}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default VotesComponent;
