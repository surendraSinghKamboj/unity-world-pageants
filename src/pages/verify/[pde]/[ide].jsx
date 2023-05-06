/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const pde = () => {
	const router = useRouter();
	const { pde, ide } = router.query;
	const [msg, setMsg] = useState("Verifying your account........");

	useEffect(() => {
		const verify = async () => {
			try {
				const response = await axios.put("/api/verification/verify", {
					pde,
					ide,
				});
				if (response) {
					setMsg(response.data.message);
				}
			} catch (error) {
				console.log("");
			}
		};
		verify();
	}, [router.query]);

	return (
		<div className="flex flex-col justify-center items-center w-full h-screen">
			<h3>{msg}</h3>
			{msg !== "Verifying your account........" ? (
				<Link href={"/"}>
					<button className="border-2 bg-blue-600 px-2 text-white hover:opacity-80 border-blue-400">
						Homepage
					</button>
				</Link>
			) : null}
		</div>
	);
};

export default pde;
