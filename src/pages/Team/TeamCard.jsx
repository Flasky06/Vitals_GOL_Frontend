import React from "react";

const TeamCard = ({ imageSrc, title, description }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg mx-1 px-1 flex flex-col items-center	 justify-center ">
			<img
				className="w-40 h-40 rounded object-cover	"
				src={imageSrc}
				alt={title}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 flex justify-center">
					{title}
				</div>
				<p className="text-gray-700 text-base flex justify-center">
					{description}
				</p>
			</div>
		</div>
	);
};

export default TeamCard;
