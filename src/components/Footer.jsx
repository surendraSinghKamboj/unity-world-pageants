import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png"
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full mt-4 py-3 flex-col bg-gradient-to-t from-[#700705] to-[#350200] flex justify-center items-center">
			<div className="w-full justify-between mt-4 py-3 flex-col md:flex-row flex items-center">
				<div className="md:w-[25%]">
					<h3 className="text-center uppercase text-white">Follow US</h3>
					<div className="flex text-white gap-4 justify-center">
						<a
							href="http://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillFacebook />
						</a>
						<a
							href="http://instagram.com/mrsunityworld"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillInstagram />
						</a>
					</div>
				</div>
                <div>
                    <Image alt="logo" src={logo} width={100} />
                </div>
				<div className="md:w-[25%] mt-5 md:mt-0">
					<h3 className="text-center uppercase text-white">Contact US</h3>
					<p className="text-white hover:opacity-80 text-center cursor-pointer">
						Email :{" "}
						<a href="mailto:unitygrouppageants@gmail.com">
							unitygrouppageants@gmail.com
						</a>
					</p>
					<p className="text-white hover:opacity-80 text-center cursor-pointer">
						Phone : <a href="tel:+91-8851473590">+918851473590</a>
					</p>
				</div>
			</div>

			{/* copy Right and develoment information */}

			<div className="md:flex w-full md:justify-between">
				<p className="text-center text-white md:mt-10 mt-1 md:ml-5 uppercase text-xs">
					ALL RIGHT RESERVED © Unity World Pageants
				</p>
				<p className="text-center text-white md:mt-10 mt-1 md:mr-5 uppercase text-xs">
					website developed and maintained by indian ventures
				</p>
			</div>
		</footer>
	);
};

export default Footer;
