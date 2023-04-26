import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../../Store/Features/Title";

const Title = () => {
	const [openTitle, setOpenTitle] = useState(false);
	const title = useSelector((result) => result.title);
	const dispatch = useDispatch();

	return (
		<div className="my-2 w-[80%]">
			<div
				onClick={() => setOpenTitle(!openTitle)}
				className="cursor-pointer text-white rounded-lg px-2 relative transition-all duration-300 border-white border-2 md:w-[40%] w-[80%]"
			>
				{title ? title : "Choose title"}
				<div
					className={`${
						openTitle ? "block" : "hidden"
					} absolute z-20 bg-slate-200`}
				>
					<p
						className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
						onClick={() => dispatch(updateTitle("Miss"))}
					>
						Miss
					</p>
					<p
						className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
						onClick={() => dispatch(updateTitle("Mrs"))}
					>
						Mrs
					</p>
					<p
						className="cursor-pointer text-black hover:bg-[#350200] hover:text-white px-3"
						onClick={() => dispatch(updateTitle("Ms"))}
					>
						Ms
					</p>
				</div>
			</div>
		</div>
	);
};

export default Title;
