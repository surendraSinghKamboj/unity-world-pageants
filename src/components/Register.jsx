import React, { useState } from "react";

import axios from "axios";

const Register = () => {

    const inputs = [
		{ type: "text", name: "name", placeholder: "Full name" },
		{ type: "email", name: "email", placeholder: "E-mail" },
		{ type: "text", name: "mobile", placeholder: "Enter your phone" },
		{ type: "password", name: "password", placeholder: "Enter Password" },
		{
			type: "password",
			name: "confirmPassword",
			placeholder: "Re-enter Password",
		},
	];

	const [data, setData] = useState({
		name: "",
		email: "",
		mobile: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			{inputs &&
				inputs.map(({ type, name, placeholder }, index) => (
					<input
						key={index}
						type={type}
						placeholder={placeholder}
						name={name}
                        onChange={(e)=>handleChange(e)}
						className="rounded-full px-2 border-2 mt-2 border-black py-1 w-72"
					/>
				))}
			<button className="mt-4 border-2 border-[#350200] px-2 rounded-full hover:bg-green-500 hover:text-white">
				Register now
			</button>
		</>
	);
};

export default Register;
