import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import HomeComponent from "./HomeComponent";
import ContactCards from "./ContactCards";

import image1 from "../../../assets/images/home-image-5.jpg";
import image2 from "../../../assets/images/home-image-4.jpg";
import image3 from "../../../assets/images/home-image-3.jpg";

const sectionsData = [
  {
    title: "we follow a holistic approach to health care",
    subtitle: "we provide best solutions regarding your health",
    linkLabel: "book an appointment",
    linkDirection: "",
    backgroundImage: image1,
  },
  {
    title: "all your patient files will now be stored online",
    subtitle:
      "minimize chances of loosing important files by having them online",
    linkLabel: "get started",
    linkDirection: "",
    backgroundImage: image2,
  },
  {
    title: "get reminders to your mobile phone on your dosages",
    subtitle:
      "patients can now get text message notification when it is time to take dosages",
    linkLabel: "register patient info",
    linkDirection: "",
    backgroundImage: image3,
  },
];

const HomeSection = () => {
  return (
    <section className="home">
      <AliceCarousel
        disableDotsControls
        disableButtonsControls
        autoPlay={true}
        autoPlayInterval={4000}
        infinite={true}
        animationType={"fadeout"}
        autoPlayStrategy={"none"}
      >
        {sectionsData.map((data, i) => (
          <HomeComponent
            id={i}
            title={data.title}
            subtitle={data.subtitle}
            linkLabel={data.linkLabel}
            linkDirection={data.linkDirection}
            backgroundImage={data.backgroundImage}
          />
        ))}
      </AliceCarousel>
      <ContactCards />
    </section>
  );
};

export default HomeSection;
