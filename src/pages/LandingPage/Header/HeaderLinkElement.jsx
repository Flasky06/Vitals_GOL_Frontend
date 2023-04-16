import React from "react";
import { Link } from "react-router-dom";

const HeaderLinkElement = ({ label, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!href) return;
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li>
      <Link
        to={href}
        onClick={handleClick}
        className="header__link uppercase block py-5 px-6 font-bold cursor-pointer"
      >
        {label}
      </Link>
    </li>
  );
};

export default HeaderLinkElement;
