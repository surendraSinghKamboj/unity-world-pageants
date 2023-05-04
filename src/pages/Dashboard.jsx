import AdminNavbar from "@/components/AdminNavbar";
import ContestantsCard from "@/components/ContestantsCard";
import Setting from "@/components/adminComponents/Setting";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Dashboard = () => {
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
			<AdminNavbar />
			<motion.div>
				<h3 className="text-center">Dashboard</h3>
				<div className=" flex gap-5 justify-around flex-col-reverse md:flex-row">
					<div className="flex gap-2 flex-wrap w-[90%] m-auto mt-3">
						{data &&
							data.map((item, index) => (
								<ContestantsCard key={index} data={item} />
							))}
					</div>
					<div className="bg-slate-200">
						<Setting />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Dashboard;
