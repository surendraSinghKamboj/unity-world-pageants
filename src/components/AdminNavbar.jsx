import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
	return (
		<nav className="w-full z-50 p-2 flex items-center sticky top-0 bg-[#350200] justify-around">
			<Link href={"/Dashboard"}>
				<h3 className="text-white text-xl">UWP admin</h3>
			</Link>
			<ul className="flex justify-start gap-3 text-white items center">
				<Link href={"/Dashboard/contestents"}>
					<li className="cursor-pointer hover:opacity-80">Contestants</li>
				</Link>
				<Link href={"/Dashboard/addcontestents"}>
					<li className="cursor-pointer hover:opacity-80">Add contestents</li>
				</Link>
				<Link href={"/Dashboard/votes"}>
					<li className="cursor-pointer hover:opacity-80">Votes</li>
				</Link>
			</ul>
		</nav>
	);
};

export default AdminNavbar;
