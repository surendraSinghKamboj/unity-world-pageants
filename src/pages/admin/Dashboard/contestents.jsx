/* eslint-disable react-hooks/rules-of-hooks */
import AdminNavbar from "@/components/AdminNavbar";
import ContestantsCard from "@/components/ContestantsCard";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const contestents = () => {
	const [data, setData] = useState([]);

	const getContestants = async () => {
		try {
			const response = await axios.get("/api/contestents/toClient");
			if (response) {
				setData(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getContestants();
	}, []);
	return (
		<>
			<Head>
				<title>Admin Contestants</title>
			</Head>
			<AdminNavbar />
			<div className="flex gap-2 flex-wrap w-[90%] m-auto mt-3">
				{data &&
					data.map((item, index) => (
						<ContestantsCard key={index} data={item} />
					))}
			</div>
		</>
	);
};

export default contestents;
