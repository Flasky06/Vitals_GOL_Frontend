import React from "react";
import { Link } from "react-router-dom";

const HealthInsuranceFirm = ({ image, title, description, link }) => {
  return (
    <div className="insurance-company-card p-2">
      <div className="insurance-company-card--image-container mb-3">
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="capitalize font-bold text-center text-3xl mb-3">
          {title}
        </h3>
        <p className="insurance-company-card__description text-justify mb-3">
          {description}
        </p>
      </div>
      <div>
        <Link
          to={link}
          className="insurance-company-card--link block p-3 font-bold uppercase text-center"
        >
          more information
        </Link>
      </div>
    </div>
  );
};
export default HealthInsuranceFirm;
