import AdminNavbar from "@/components/AdminNavbar";
import VotesComponent from "@/components/adminComponents/VotesComponent";
import Head from "next/head";
import React from "react";

const votes = () => {
	return (
		<>
			<Head>
				<title>Admin || Votes</title>
			</Head>
			<AdminNavbar />
			<div className="w-[80%] m-auto">
				<VotesComponent />
			</div>
		</>
	);
};

export default votes;
