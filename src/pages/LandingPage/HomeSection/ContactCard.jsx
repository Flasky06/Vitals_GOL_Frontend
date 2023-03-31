import React from "react";

const ContactCard = ({ icon, title, subtitle }) => {
  return (
    <div className="home-contact-card flex items-center mr-2">
      <div className="home-contact__icon-box flex justify-center items-center mr-8">
        {icon}
      </div>
      <div>
        <p className="capitalize font-bold">{title}</p>
        <p className="u-text-pri-col font-bold">{subtitle}</p>
      </div>
    </div>
  );
};

export default ContactCard;
