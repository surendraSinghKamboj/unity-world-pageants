import React from "react";

const Loading = () => {
	return (
		<div className="w-full min-h-screen bg-[#2c2b2b73] fixed flex justify-center items-center">
			<div className="w-28 h-28 flex justify-center items-center animate-bounce border-4 border-[#2c2b2b1f] border-l-blue-500 border-r-blue-500 border-t-blue-500 border-l-2 border-t-2 border-r-2 rounded-full">
                <span className="text-white">Loading...</span>
            </div>
		</div>
	);
};

export default Loading;
