import React from "react";
import { Link } from "react-router-dom";
import { OpenLink } from "../../../Icons/Icons";

const Feature = ({ image, title, description, link }) => {
  return (
    <div className="feature mb-16">
      <div className="Feature__image-container">
        <img src={image} alt={title} className="feature__image" />
      </div>
      <div className="p-3">
        <h3 className="feature__title uppercase font-bold text-center mb-3">
          {title}
        </h3>
        <p className="feature__description text-justify font-bold">
          {description}
        </p>
        <div className="flex justify-center">
          <Link
            to={link}
            className="feature__link mt-3 inline-flex cursor-pointer p-3 capitalize font-bold"
          >
            <span className="inline-block mr-2">Get started</span>
            <OpenLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
