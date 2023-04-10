import Link from "next/link";
import React from "react";

const Error = () => {
	return (
		<div className="min-h-full flex justify-center flex-col items-center">
			<h3 className="mt-14"> Error 404 page not found</h3>
			<h3 className="mt-2">
				Goto <Link href={"/"}>Homepage</Link>
			</h3>
		</div>
	);
};

export default Error;
