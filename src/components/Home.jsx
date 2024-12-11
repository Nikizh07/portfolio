import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "./DarkModeButton";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true; // Default to true if no saved value
  });

  // useEffect(() => {
  //   localStorage.setItem("darkMode", JSON.stringify(darkMode));
  //   document.body.style.backgroundColor = darkMode ? "#111216" : "#ffffff";
  //   document.body.style.color = darkMode ? "#cecece" : "#111216";
  // }, [darkMode]);

  // const handleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div>
      <div className={`container lg:mx-[150px]`}>
        <div
          className={`hding my-[20px] p-2 lg:p-0 flex ${
            darkMode ? "text-[#cecece]" : "black"
          }`}
        >
          <Heading />
          <div className="dmode right-5 absolute">
            {/* <FontAwesomeIcon icon={faMoon} size="2x" onClick={handleDarkMode} /> */}
            <DarkModeButton/>
          </div>
        </div>
        <br />
        <p
          className={`font-bold hidden lg:block ${
            darkMode ? "text-[#cecece]" : "black"
          }`}
        >
          About Myself
        </p>
        <br />
        <p
          className={`about hidden lg:block lg:w-[400px] ${
            darkMode ? "text-[#cecece]" : "black"
          }`}
        >
          Hello there, I'm a self taught develop who's passionate about
          programming, I'm experienced in some popular languages as well, Feel
          free to contact me.
        </p>
        <br />
        <a
          href="mailto:nikizh007@gmail.com"
          className={`gtc border-2 bg-[#cccccc] ${
            darkMode ? "text-[#111216]" : ""
          } border-black hover:bg-black hover:text-white hidden lg:inline-block`}
        >
          Get in touch
        </a>
        <div className="nv lg:my-[170px]">
          <NavContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
