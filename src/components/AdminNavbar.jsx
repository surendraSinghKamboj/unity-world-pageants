import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
	return (
		<nav className="w-full p-2 flex items-center sticky top-0 bg-[#350200] justify-around">
			<Link href={"/admin/Dashboard"}>
				<h3 className="text-white text-xl">UWP admin</h3>
			</Link>
			<ul className="flex justify-start gap-3 text-white items center">
				<Link href={"/admin/queries"}>
					<li className="cursor-pointer hover:opacity-80">Queries</li>
				</Link>
				<Link href={"/admin/addcontestents"}>
					<li className="cursor-pointer hover:opacity-80">Add contestents</li>
				</Link>
				<Link href={"/admin/votes"}>
					<li className="cursor-pointer hover:opacity-80">Votes</li>
				</Link>
			</ul>
		</nav>
	);
};

export default AdminNavbar;