import AdminNavbar from "@/components/AdminNavbar";
import Setting from "@/components/adminComponents/Setting";
import { motion } from "framer-motion";

const Dashboard = () => {
	return (
		<>
			<AdminNavbar />
			<motion.div>
				<h3 className="text-center">Dashboard</h3>
				<div className="absolute right-0 top-52 h-60 bg-slate-200">
					<Setting />
				</div>
			</motion.div>
		</>
	);
};

export default Dashboard;
