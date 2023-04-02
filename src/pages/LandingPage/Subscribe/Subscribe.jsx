import React from "react";
import TitleElement from "../TitleElement/TitleElement";

import video from "../../../assets/videos/animation.mp4";

const Subscribe = () => {
  return (
    <section className="mt-20 p-4">
      <TitleElement
        shouldCenter={true}
        mainTitle="never miss a tip"
        subTitle="subscribe to our newsletter"
      />
      <p className="subscribe__campaign">
        Don't miss out on the latest developments in health and wellness. Sign
        up for our newsletter and receive exclusive news, expert insights, and
        practical tips to help you live your healthiest life. Join our community
        of like-minded individuals and stay up-to-date on your journey towards
        optimal well-being. It's easy just give us either your email address,
        your phone number or both and push the subscribe button.
      </p>
      <div className="subscribe_container flex items-center justify-center">
        <div>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            your browser does not support this video type
          </video>
        </div>
        <div>
          <form action="" className="subscribe__form p-5">
            <input
              className="subscribe_form_input block p-4 font-bold mb-3"
              placeholder="email address"
              type="email"
              name=""
              id=""
            />
            <p className="uppercase font-bold">or</p>
            <input
              className="subscribe_form_input block p-4 font-bold mt-3 mb-3"
              placeholder="your phone number"
              type="tel"
            />
            <button
              type="submit"
              className="subscribe__submit p-3 font-bold capitalize"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
