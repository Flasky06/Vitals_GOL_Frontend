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
          <HeaderLinkElement label="Home" href="#home" />
          <HeaderLinkElement label="About" href="#about" />
          <HeaderLinkElement label="Pages" />
          <HeaderLinkElement label="Features" href="#features" />
          <HeaderLinkElement label="subscribe" href="#subscribe" />
          <HeaderLinkElement label="Team" href="#team" />
        </ol>
      </nav>
      {/* eslint-disable-next-line */}
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
