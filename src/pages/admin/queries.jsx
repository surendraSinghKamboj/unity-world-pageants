/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import AdminNavbar from "@/components/AdminNavbar";
import QueryCard from "@/components/adminComponents/QueryCard";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const queries = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("/api/queries/getQuery");
				if (response) {
					setData(response.data.result);
				}
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	}, []);

	return (
		<>
			<AdminNavbar />

			<div className="w-full py-2 bg-[#350200] my-2">
				<h3 className="text-white text-xl text-center">Queries</h3>
			</div>
			<div className="flex justify-center flex-wrap items-center">
				{data.map(({ name, email, mobile, message }, index) => (
					<QueryCard
						key={index}
						name={name}
						email={email}
						mobile={mobile}
						message={message}
					/>
				))}
			</div>
		</>
	);
};

export default queries;
