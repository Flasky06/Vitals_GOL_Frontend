import React from "react";
import HeaderLinkElement from "./HeaderLinkElement";

const Header = () => {
  return (
    <header className="header sticky flex justify-between items-center px-4">
      <h1 className="logo">
        <span>V</span>itals
      </h1>
      <nav className="flex items-center">
        <ol className="flex">
          <HeaderLinkElement label="Home" />
          <HeaderLinkElement label="About" />
          <HeaderLinkElement label="Pages" />
          <HeaderLinkElement label="Doctors" />
          <HeaderLinkElement label="Contact" />
          <HeaderLinkElement label="Team" />
        </ol>
      </nav>
      <a
        href=""
        className="header__link__cta-1 block p-3 font-bold capitalize rounded-full"
      >
        doctor's appointment
      </a>
    </header>
  );
};
export default Header;
