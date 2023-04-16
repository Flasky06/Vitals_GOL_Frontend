import React from "react";

const HealthInsuranceBenefit = ({ count, benefit, benefitDescription }) => {
  return (
    <div className="health_insurance_benefit flex items-center p-5">
      <div className="health_insurance-benefit-count font-bold text-6xl mr-3">
        {count}
      </div>
      <div>
        <p className="health-benefit__description text-justify font-bold">
          {" "}
          <span className="capitalize font-bold inline-block p-1">
            {benefit}
          </span>{" "}
          {benefitDescription}
        </p>
      </div>
    </div>
  );
};

export default HealthInsuranceBenefit;
