import React from "react";

const HeaderLinkElement = ({ label, to }) => {
  return (
    <li>
      <a
        href={to}
        className="header__link uppercase block py-5 px-6 font-bold cursor-pointer"
      >
        {label}
      </a>
    </li>
  );
};

export default HeaderLinkElement;
