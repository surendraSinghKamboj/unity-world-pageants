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
	const [query, setQuery] = useState(1);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("/api/queries/getQuery");
				if (response) {
					setQuery(1+query);
					setData(response.data.result);
				}
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	}, [query]);

	return (
		<>
			<AdminNavbar />

			<div className="w-full py-2 bg-[#350200] my-2">
				<h3 className="text-white text-xl text-center">Queries</h3>
			</div>
			<div className="flex justify-center flex-wrap items-center">
				{data ? (
					data.map(({ _id, name, email, mobile, message }) => (
						<QueryCard
							key={_id}
							id={_id}
							name={name}
							email={email}
							mobile={mobile}
							message={message}
						/>
					))
				) : (
					<div className="w-full bg-[#350200] h-[400px] flex justify-center items-center">
						<h3 className="text-black">There is no any query...</h3>
					</div>
				)}
			</div>
		</>
	);
};

export default queries;
