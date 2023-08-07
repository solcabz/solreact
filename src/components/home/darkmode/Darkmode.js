import React from "react";
import "./darkmode.css";

const Darkmode = () => {
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <label htmlFor="darkmode-toggle" className="darkmode">
        <input
          type="checkbox"
          id="darkmode-toggle"
          className="darkmode_input"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <span className="slider">

        </span>
      </label>
    </div>
  );
};

export default Darkmode;
