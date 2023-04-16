import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="ins-hero flex items-center p-5 mt-1">
      <div className="insurance-hero__text">
        <h2 className="font-bold text-5xl text-center capitalize mb-5">
          Welcome to our comprehensive insurance information system. Get
          protected today!
        </h2>
        <p className="insurance-hero__desc text-center font-bold mb-5">
          Our health insurance information system is designed to provide you
          with all the information you need to make informed decisions about
          your health coverage. Our user-friendly interface allows you to easily
          compare different health insurance policies and providers, so you can
          choose the one that best meets your needs and budget. With our
          comprehensive health insurance information system, you can rest easy
          knowing that you have the knowledge and resources to protect your
          health and your finances.
        </p>
        <div className="flex mt-5 justify-center">
          <Link className="insurance-link-main block p-3 font-bold capitalize mr-3">
            discover health insurance providers
          </Link>
          <Link className="insurance-link-sub block p-3 font-bold capitalize">
            benefits of health insurance
          </Link>
        </div>
      </div>
      {/* <div className="insurance-hero__image">
                <img src={ins} alt="a doctor and a nurse ready to treat a person" />
            </div> */}
    </section>
  );
};
export default Hero;
