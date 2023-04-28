import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	add,
	addMore,
	removeItem,
} from "../../../Store/Features/incrementalStorage";
import { BiPlus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Hobbies = ({ title }) => {
	const result = useSelector((state) => state.hobbies);
	const dispatch = useDispatch();
	const { Hobbies, Awards } = result;

	const handleInputChange = (index, e) => {
		dispatch(add({ index, value: e.target.value, title }));
	};

	const handleAddMore = () => {
		dispatch(addMore({ category: title }));
	};

	const handleRemoveItem = (index) => {
		dispatch(removeItem({ category: title, index }));
	};

	return (
		<div className="w-[80%] m-auto">
			<h4 className="text-white">{title}</h4>
			{title === "Hobbies"
				? Hobbies.map((hobby, index) => (
						<div key={index} className="flex w-full gap-2 items-center">
							<input
								type="text"
								placeholder="Hobby"
								value={hobby}
								onChange={(e) => handleInputChange(index, e)}
								className="w-[80%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
							/>
							<AiOutlineDelete
								className="text-white cursor-pointer hover:opacity-80"
								onClick={() => handleRemoveItem(index)}
							/>
						</div>
				  ))
				: Awards.map((award, index) => (
						<div key={index} className="flex w-full gap-2 items-center">
							<input
								type="text"
								placeholder="Award"
								value={award}
								onChange={(e) => handleInputChange(index, e)}
								className="w-[80%] bg-slate-800 text-white px-2 my-2 border-2 border-white rounded-xl"
							/>
							<AiOutlineDelete
								className="text-white cursor-pointer hover:opacity-80"
								onClick={() => handleRemoveItem(index)}
							/>
						</div>
				  ))}
			<button
				className="flex justify-center items-center text-white border-2 border-white px-2 rounded-xl hover:opacity-80"
				onClick={handleAddMore}
			>
				<BiPlus />
				add more
			</button>
		</div>
	);
};

export default Hobbies;
