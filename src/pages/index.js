import Head from "next/head";
import { motion } from "framer-motion";
import homeFront from "../assets/homefront.jpeg";
import crown from "../assets/crown.png";
import Image from "next/image";
import Carosel from "@/components/Carosel";
import GrandFamily from "@/components/GrandFamily";
import Campaign from "@/components/Campaign";
import { seoDescription } from "@/websitecontent/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			
			<Head>
				<title>Unity World Pageants</title>
				<meta name="description" content={seoDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<motion.div
				initial={{ x: "100px" }}
				animate={{ x: 0 }}
				className="hidden md:block"
			>
				<Image src={homeFront} alt={"home"} className="w-full" />
			</motion.div>

			{/* second section from top */}
			<div className="flex mt-2">
				<div className="flex-col md:w-[50%] px-2">
					{/* uppercase heading */}
					<div className="text-3xl uppercase mt-4">
						<h3 className="text-center">{'"Welcome to Unity World Pageants"'}</h3>
					</div>
					{/* text content of the home page */}
					<div>
						<div className="md:w-[50%] md:hidden block  p-4">
							<Image src={crown} alt="crown"></Image>
						</div>
						<p className="mt-2 text-justify">
							Welcome to Unity World Pageants - the premier beauty pageant that
							celebrates diversity, unity, and empowerment of women from around
							the world. Our pageant is more than just a competition, it is a
							platform that provides opportunities for women to showcase their
							talents, intellect, and beauty while creating lifelong bonds of
							sisterhood.
						</p>
						<br />
						<p className="text-justify">
							At Unity World Pageants, we believe that every woman has a unique
							story to tell and a voice that deserves to be heard. We strive to
							create an inclusive environment that celebrates diversity in all
							its forms - race, ethnicity, religion, culture, and body type. Our
							pageant is open to women of all ages and backgrounds, and we
							welcome contestants from all corners of the globe.Our mission is
							to empower women to become leaders in their communities and
							beyond. We provide our contestants with a platform to showcase
							their talents, promote their advocacy causes, and connect with
							like-minded women from around the world. Our pageant also offers
							professional development opportunities, such as media training and
							public speaking coaching, to help our contestants grow and develop
							their skills.At Unity World Pageants, we are committed to giving
							back to the community. We partner with various charities and
							non-profit organizations to raise awareness and funds for
							important causes, such as education, healthcare, and environmental
							sustainability. Our pageant also promotes eco-friendly and
							sustainable practices to reduce our carbon footprint and protect
							the planet for future generations. Join us on this journey of
							empowerment, sisterhood, and unity. Whether you are a contestant,
							sponsor, or supporter, we invite you to be a part of the Unity
							World Pageants family. Together, we can make a positive impact on
							the world and inspire women to reach their full potential.
						</p>
					</div>
				</div>
				<div className="md:w-[50%] md:inline hidden p-4">
					<Image src={crown} alt="crown"></Image>
				</div>
			</div>

			{/* Campagin */}
			<Campaign />

			{/* carousel */}
			<Carosel />
			{/* under carosel */}
			<div className="w-[80%] m-auto">
				<GrandFamily />
			</div>
			<Footer />
		</>
	);
}
