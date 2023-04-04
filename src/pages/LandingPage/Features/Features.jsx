import React from "react";
import TitleElement from "../TitleElement/TitleElement";
import Feature from "./Feature";

import pregnant from "../../../assets/images/pregnant.jpg";
import dosage from "../../../assets/images/dosage.jpg";
import patientFile from "../../../assets/images/patient_file.jpg";
import insurance from "../../../assets/images/insurance1.jpg";

const Features = () => {
  return (
    <section className="features mt-24">
      <TitleElement
        shouldCenter={true}
        mainTitle="what vitals brings to the table"
        subTitle="features"
      />
      <div className="features__container p-10">
        <Feature
          image={pregnant}
          title="maternal system"
          description="The maternal system is an online platform that stores comprehensive information on pregnant women. It allows healthcare professionals to access and update patient records, including medical history, test results, and appointments. The system ensures secure storage and easy retrieval of data, enhancing maternal healthcare and reducing medical errors. Patients can also access their information, monitor their progress, and communicate with their healthcare providers."
        />

        <Feature
          image={dosage}
          title="dosage reminder system"
          description="This online system reminds users to take medication at scheduled times, via email or SMS. It helps users manage their medication regimen, promoting good health and reducing medication-related issues. The system may also include features such as tracking adherence, providing medication education, and allowing users to share their schedules with healthcare providers or family members for additional support."
        />

        <Feature
          image={patientFile}
          title="patient files online"
          description="This system enables the secure storage and easy retrieval of patient files online. It allows healthcare providers to access and update patient records, including medical history, test results, and treatment plans, from any location. Patients can also access their information, monitor their progress, and communicate with their healthcare providers. With this system, medical errors are reduced, and patient care is enhanced."
        />

        <Feature
          image={insurance}
          title="insurance info system"
          description="This system educates users about various medical insurance schemes, offering comprehensive information about coverage options, premium rates, and claims management. Users can make informed decisions when selecting an insurance plan that suits their needs and stay up-to-date with changes in policies. With this system, users can access important information about medical insurance and ensure appropriate coverage for their healthcare needs."
        />
      </div>
    </section>
  );
};

export default Features;
