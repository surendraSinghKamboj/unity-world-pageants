import React from "react";
import QueryCard from "./QueryCard";

const QueryItems = ({ data, query }) => {
	return (
		<div className="flex justify-center flex-wrap items-center">
			{data.length !== 0 ? (
				data.map(({ _id, name, email, mobile, message, resolved }) => (
					<QueryCard
						key={_id}
						id={_id}
						name={name}
						email={email}
						mobile={mobile}
						message={message}
						resolved={resolved}
						query={query}
					/>
				))
			) : (
				<h3 className="text-black mt-14">There is no any query...</h3>
			)}
		</div>
	);
};

export default QueryItems;
