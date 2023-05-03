import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Setting = () => {
	const [voting, setVoting] = useState(false);
	const [number, setNumberr] = useState(0);
	useEffect(() => {
		const getVoting = async () => {
			try {
				const response = await axios.get("/api/settings/voting");
				if (response) {
					setVoting(response.data.status);
				}
			} catch (error) {
				console.log("failed to fetch settings", error);
			}
		};
		getVoting();
	}, [number]);

	const handleUpdate = async () => {
		try {
			const response = await axios.post("/api/settings/voting", {});
			if (response) {
				setNumberr(Math.random());
			}
		} catch (error) {
			console.log("failed");
		}
	};
	return (
		<div className="w-52">
			<div className="flex justify-center items-center">
				<h3>Voting</h3>
				<div
					onClick={() => handleUpdate()}
					className="relative w-12 cursor-pointer bg-slate-400 rounded-xl h-4 mx-2"
				>
					<div
						className={`absolute ${
							voting ? "left-[32px] bg-green-600" : "left-0 bg-red-600"
						} h-4 w-4 scale-110 rounded-full transition-all duration-500`}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
