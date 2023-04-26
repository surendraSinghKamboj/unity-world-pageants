import AdminNavbar from "@/components/AdminNavbar";
import { motion } from "framer-motion";

const Dashboard = () => {
	return (
		<>
			<AdminNavbar />
			<motion.div>
				<h3>Dashboard </h3>
			</motion.div>
		</>
	);
};

export default Dashboard;
