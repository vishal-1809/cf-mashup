import React from "react";
import { useState } from "react";
import "../Buttons/Button.css";

const Dark = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme = "dark";

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }
  const [lightORdark, setLightORDark] = useState(theme);

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      // console.log(theme);
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setLightORDark("light");
    } else {
      // console.log(theme);
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setLightORDark("dark");
    }
  };

  // return (
  if (lightORdark === "light") {
    return (
      <>
        <svg
          onClick={switchTheme}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sun"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </>
    );
  } else {
    return (
      <>
        <svg
          onClick={switchTheme}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 moon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </>
    );
  }


  // );
};

export default Dark;
