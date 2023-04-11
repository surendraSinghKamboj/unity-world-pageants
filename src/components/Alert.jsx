import React from "react";

const Alert = ({ text }) => {
	return (
		<div className="h-5">
			<h4 className="text-red-700">{text}</h4>
		</div>
	);
};

export default Alert;
