/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import AdminNavbar from "@/components/AdminNavbar";
import QueryItems from "@/components/adminComponents/QueryItems";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const queries = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState(1);
	const [queryType, setQueryType] = useState("new");

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("/api/queries/getQuery", {
					headers: { "query-type": queryType },
				});
				if (response) {
					setData(response.data.result);
				}
			} catch (error) {
				console.error("error 404 Please Connect internet");
			}
		};
		getData();
	}, [query, queryType]);

	return (
		<>
			<AdminNavbar />

			<div className="w-full py-2 bg-[#350200] my-2">
				<h3 className="text-white text-xl text-center">Queries</h3>
			</div>
			<div className="flex justify-evenly items-center">
				<button
					className={`px-2 border-2 ${
						queryType === "new" ? "bg-blue-700" : "bg-red-700"
					} text-white rounded-xl hover:opacity-80`}
					onClick={() => setQueryType("new")}
				>
					Unresolved
				</button>
				<button
					className={`px-2 border-2 ${
						queryType === "resolved" ? "bg-blue-700" : "bg-red-700"
					} text-white rounded-xl hover:opacity-80`}
					onClick={() => setQueryType("resolved")}
				>
					Resolved
				</button>
				<button
					className={`px-2 border-2 ${
						queryType === "all" ? "bg-blue-700" : "bg-red-700"
					} text-white rounded-xl hover:opacity-80`}
					onClick={() => setQueryType("all")}
				>
					All Queries
				</button>
			</div>
			<QueryItems data={data} query={setQuery} />
		</>
	);
};

export default queries;
