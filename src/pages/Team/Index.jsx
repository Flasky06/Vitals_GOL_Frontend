import React from "react";
import Card from "./Card";

import TitleElement from "../LandingPage/TitleElement/TitleElement";
import lavin from "../../assets/images/Lavin.jpeg";
import denis from "../../assets/images/Denis.jpeg";
import elie from "../../assets/images/ellie.jpeg";
import karen from "../../assets/images/karen.jpeg";
import bonface from "../../assets/images/Bonface.png";

function Team() {
	return (
		<section className="features mt-24  " id="team">
			<div className="mt=20"></div>
			<TitleElement
				shouldCenter={true}
				mainTitle="Team Members"
				subTitle="Team "
			/>
			<div className="container flex justify-center mt-14">
				<Card
					imageSrc={denis}
					title="Denis Otuoma"
					description="Team Captain"
				/>
				<Card
					imageSrc={karen}
					title="Karen kathure "
					description="Project Manager"
				/>
				<Card
					imageSrc={elie}
					title="Elie Muluke "
					description="Backend Developer"
				/>
				<Card
					imageSrc={lavin}
					title="Lavine Jane "
					description="UI/UX designer"
				/>{" "}
				<Card
					imageSrc={bonface}
					title="Bonface Njuguna "
					description="Frontend Developer"
				/>
			</div>
		</section>
	);
}

export default Team;
