import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";

const Uploadimage = () => {
	const [loadingOne, setLoadingOne] = useState(false);
	const [loadingTwo, setLoadingTwo] = useState(false);
	const [loadingThree, setLoadingThree] = useState(false);

	const handleChange = async (e) => {
		console.log(e);
		if (e.target.name === "fileOne") {
			setLoadingOne(true);
		}
		if (e.target.name === "fileTwo") {
			setLoadingTwo(true);
		}
		if (e.target.name === "fileThree") {
			setLoadingThree(true);
		}
	};

	return (
		<div className="flex justify-center items-center gap-3 my-3">
			{/* file one */}
			<label htmlFor="fileUploadOne" className=" flex justify-start  text-left">
				<div className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400">
					{loadingOne ? (
						<>
							<VscLoading className="text-3xl animate-spin" />
							<p className="hidden md:inline">Image Uploading</p>
						</>
					) : (
						<>
							<AiOutlineCloudUpload className="text-3xl" />
							<p className="hidden md:inline">Upload Image</p>
						</>
					)}
				</div>
			</label>
			<input
				onChange={handleChange}
				type="file"
				name="fileOne"
				id="fileUploadOne"
				className="hidden"
			/>
			{/* file two */}
			<label htmlFor="fileUploadTwo" className=" flex justify-start  text-left">
				<div className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400">
					{loadingTwo ? (
						<>
							<VscLoading className="text-3xl animate-spin" />
							<p className="hidden md:inline">Image Uploading</p>
						</>
					) : (
						<>
							<AiOutlineCloudUpload className="text-3xl" />
							<p className="hidden md:inline">Upload Image</p>
						</>
					)}
				</div>
			</label>
			<input
				onChange={handleChange}
				type="file"
				name="fileTwo"
				id="fileUploadTwo"
				className="hidden"
			/>
			{/* file three */}
			<label
				htmlFor="fileUploadThree"
				className=" flex justify-start  text-left"
			>
				<div className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400">
					{loadingThree ? (
						<>
							<VscLoading className="text-3xl animate-spin" />
							<p className="hidden md:inline">Image Uploading</p>
						</>
					) : (
						<>
							<AiOutlineCloudUpload className="text-3xl" />
							<p className="hidden md:inline">Upload Image</p>
						</>
					)}
				</div>
			</label>
			<input
				onChange={handleChange}
				type="file"
				name="fileThree"
				id="fileUploadThree"
				className="hidden"
			/>
		</div>
	);
};

export default Uploadimage;
