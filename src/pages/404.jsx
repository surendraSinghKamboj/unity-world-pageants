import Head from "next/head";
import Link from "next/link";
import React from "react";
import { seoDescription } from "@/websitecontent/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Error = () => {
	return (
		<>
			<Head>
				<title>Unity World Pageants</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div className="min-h-full flex justify-center flex-col items-center">
				<h3 className="mt-14"> Error 404 page not found</h3>
				<h3 className="mt-2">
					Goto <Link href={"/"}>Homepage</Link>
				</h3>
			</div>
			<Footer />
		</>
	);
};

export default Error;
