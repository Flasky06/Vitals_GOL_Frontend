import React from "react";

const HomeComponent = ({
  backgroundImage,
  title,
  subtitle,
  linkLabel,
  linkDirection,
}) => {
  return (
    <section
      className="home-section flex flex-col justify-center px-14"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="home-textbox w-3/5">
        <p className="home-textbox__paragraph-lined uppercase font-bold mb-4">
          Expert Medical Treatment
        </p>
        <h2 className="font-bold text-6xl capitalize mb-8">{title}</h2>
        <p className="text-2xl mb-7 capitalize">{subtitle}</p>
        <a
          href={linkDirection}
          className="inline-block p-4 font-bold capitalize rounded-full cursor-pointer"
        >
          {linkLabel}
        </a>
      </div>
    </section>
  );
};
export default HomeComponent;
