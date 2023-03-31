import React from "react";
import ContactCard from "./ContactCard";
import { Phone, Mail, LocationPin } from "../../../Icons/Icons";

const ContactCards = () => {
  return (
    <div className="contactd-cards__container flex">
      <ContactCard
        icon={<Phone />}
        title="give us a call"
        subtitle="0718762354"
      />
      <ContactCard
        icon={<Mail />}
        title="give us a call"
        subtitle="0718762354"
      />
      <ContactCard
        icon={<LocationPin />}
        title="give us a call"
        subtitle="0718762354"
      />
    </div>
  );
};

export default ContactCards;
