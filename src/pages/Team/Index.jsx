import React from "react";
import TitleElement from "../LandingPage/TitleElement/TitleElement";
import TeamCard from "./TeamCard";
import denis from "../../assets/images/Denis.jpeg";
import lavin from "../../assets/images/Lavin.jpeg";
import ellie from "../../assets/images/ellie.jpeg";
import karen from "../../assets/images/karen.jpeg";
import bonface from "../../assets/images/Bonface.png";

const TeamIndex = () => {
	return (
		<section className="Team mt-24 mb-12" id="team">
			<TitleElement
				shouldCenter={true}
				mainTitle="The team "
				subTitle="Team "
			/>

			<div className="container  flex  justify-center ">
				<TeamCard
					imageSrc={denis}
					title="Dennis Otuoma"
					description="Team Captain"
				/>
				<TeamCard
					imageSrc={karen}
					title="karen Kathure"
					description="Product Manager"
				/>
				<TeamCard
					imageSrc={ellie}
					title="Elie Muluke"
					description="Backend Developer"
				/>
				<TeamCard
					imageSrc={lavin}
					title="Lavine Jane"
					description="UI/UX designer"
				/>
				<TeamCard
					imageSrc={bonface}
					title="Bonface Njuguna"
					description="Frontend developer"
				/>
			</div>
		</section>
	);
};

export default TeamIndex;
