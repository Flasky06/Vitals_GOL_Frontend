import React from "react";
import TitleElement from "../../LandingPage/TitleElement/TitleElement";
import HealthInsuranceBenefit from "./HealthInsuranceBenefit";

const healthInsuranceBenefits = [
  {
    benefit: "Access to healthcare:",
    description:
      "Health insurance provides you with access to a network of healthcare providers, which means that you can seek medical attention when needed without worrying about the cost.",
  },
  {
    benefit: "Financial protection:",
    description:
      "Health insurance protects you financially by covering the cost of medical treatment, hospitalization, and other healthcare expenses. This can help prevent you from incurring large medical bills that can lead to debt.",
  },
  {
    benefit: "Health screenings:",
    description:
      "Health insurance often covers the cost of preventative care such as health screenings, immunizations, and regular check-ups. This can help catch health problems early and prevent them from becoming more serious.",
  },
  {
    benefit: "Reduced out-of-pocket expenses:",
    description:
      "Health insurance can help reduce your out-of-pocket expenses by covering the cost of medical treatment, which means that you won't have to pay for everything out of your own pocket.",
  },
  {
    benefit: "Prescription drug coverage:",
    description:
      "Health insurance often covers the cost of prescription drugs, which can be expensive. This can help make it more affordable to manage chronic conditions.",
  },
  {
    benefit: "Mental health coverage:",
    description:
      "Many health insurance plans now include coverage for mental health services, including counseling and therapy. This can help individuals who are struggling with mental health issues get the support they need.",
  },
  {
    benefit: "Preventative care services:",
    description:
      "Health insurance covers an array of preventative care services such as routine health exams, vaccinations, and other screening tests that can detect health issues in their early stages.",
  },
  {
    benefit: "Reduced medical costs:",
    description:
      "With health insurance, you can take advantage of negotiated rates for medical services, which are often lower than the rates charged to uninsured individuals.",
  },
  {
    benefit: "Peace of mind:",
    description:
      "Knowing that you have health insurance can provide peace of mind, as you won't have to worry about the financial burden of a medical emergency.",
  },
  {
    benefit: "Improved health outcomes:",
    description:
      "By having access to healthcare services and preventative care, individuals with health insurance are more likely to manage their health conditions and receive timely medical attention, resulting in better overall health outcomes.",
  },
];

const HealthInsuranceBenefits = () => {
  return (
    <section className="health-insurance-benefits__section">
      <TitleElement
        subTitle="benefits of insurance"
        mainTitle="why you and your family should be insured"
        shouldCenter={true}
      />
      <div className="health-insurance-benefits__container p-5">
        {healthInsuranceBenefits.map((currentBenefit, index) => (
          <HealthInsuranceBenefit
            key={index}
            count={index < 9 ? "0" + `${index + 1}` : index + 1}
            benefit={currentBenefit.benefit}
            benefitDescription={currentBenefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HealthInsuranceBenefits;
