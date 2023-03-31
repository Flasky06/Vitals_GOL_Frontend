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
        title="send us an email"
        subtitle="vitals@gmail.com"
      />
      <ContactCard
        icon={<LocationPin />}
        title="visit us in our offices"
        subtitle="(coming soon)"
      />
    </div>
  );
};

export default ContactCards;
