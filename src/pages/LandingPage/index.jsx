import React from "react";
import Header from "./Header/Header";
import HomeSection from "./HomeSection/HomeSection";
import About from "./About/About";
import Features from "./Features/Features";
import Subscribe from "./Subscribe/Subscribe";
import "./styles.css";
import Team from "../Team/Index";

const LandingPage = () => {
	return (
		<>
			<Header />
			<HomeSection />
			<About />
			<Features />
			<Team />
			<Subscribe />
		</>
	);
};
export default LandingPage;
