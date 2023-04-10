import React, { useState } from "react";

const Login = () => {
	const inputs = [
		{ type: "email", name: "email", placeholder: "E-mail" },
		{ type: "password", name: "password", placeholder: "Enter Password" },
	];

	const [data, setData] = useState({
		email: "",
		password: "",
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
						onChange={(e) => handleChange(e)}
						className="rounded-full px-2 border-2 mt-2 border-black py-1 w-72"
					/>
				))}
			<button className="mt-4 border-2 border-[#350200] px-2 rounded-full hover:bg-green-500 hover:text-white">
				Login now
			</button>
		</>
	);
};

export default Login;
