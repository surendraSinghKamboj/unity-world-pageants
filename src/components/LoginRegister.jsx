import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Query from "./Query";
import Login from "./LoginUser";

const LoginRegister = ({ close }) => {
	const [part, setPart] = useState("register");

	return (
		<div className="fixed w-full h-[100vh] bg-[rgba(0,0,0,0.9)] top-0 z-10">
			<AiOutlineClose
				className="text-white z-30 absolute p-1 cursor-pointer hover:bg-white hover:text-black text-2xl rounded-full right-4 top-4"
				onClick={() => close(false)}
			/>
			<div className="bg-[#350200] text-white rounded-md flex flex-col relative justify-center items-center m-auto min-h-[90vh] mt-8 w-[90%] md:w-1/2">
				<div className="flex w-full top-3">
					<div
						onClick={() => setPart("register")}
						className={`w-full flex justify-center cursor-pointer`}
					>
						<p>Submit Your Query</p>
					</div>
					{/* <div
						onClick={() => setPart("login")}
						className={`w-[50%] flex justify-center cursor-pointer`}
					>
						<p>Login</p>
					</div> */}
				</div>
				<div className="absolute top-6 w-full h-1">
					{/* <div
						className={`absolute transition-all duration-300 top-4 w-[50%] ${
							part === "login" ? "left-[50%]" : "left-0"
						} h-1 bg-[#920f0a]`}
					></div> */}
				</div>
				{part === "register" ? <Query /> : <Login />}
			</div>
		</div>
	);
};

export default LoginRegister;
