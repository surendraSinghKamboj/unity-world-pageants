import React, { useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { imageFunction } from "../../Store/Features/Images";

const Uploadimage = ({ fetched }) => {
	const data = useSelector((result) => result.updateImages);
	const { imgOne, imgTwo, imgThree } = data;

	const dispatch = useDispatch();

	/// Admin panel handler
	useEffect(() => {
		if (fetched) {
			dispatch(imageFunction(["imgOne", fetched[0]]));
			dispatch(imageFunction(["imgTwo", fetched[1]]));
			dispatch(imageFunction(["imgThree", fetched[2]]));
		}
	}, [dispatch, fetched]);

	const handleChange = async (e) => {
		// event blob converter

		if (e.target.name === "fileOne") {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				dispatch(imageFunction(["imgOne", reader.result]));
			};

			if (file) {
				reader.readAsDataURL(file);
			} else {
			}
		}
		if (e.target.name === "fileTwo") {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				dispatch(imageFunction(["imgTwo", reader.result]));
			};

			if (file) {
				reader.readAsDataURL(file);
			} else {
			}
		}
		if (e.target.name === "fileThree") {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				dispatch(imageFunction(["imgThree", reader.result]));
			};

			if (file) {
				reader.readAsDataURL(file);
			} else {
			}
		}
	};

	return (
		<div className="flex justify-center items-center gap-3 my-3">
			{/* file one */}
			<label htmlFor="fileUploadOne" className=" flex justify-start  text-left">
				<div className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400">
					{imgOne ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							alt="img"
							src={imgOne}
							className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
						/>
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
					{imgTwo ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							alt="img"
							src={imgTwo}
							className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
						/>
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
					{imgThree ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							alt="img"
							src={imgThree}
							className="md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
						/>
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