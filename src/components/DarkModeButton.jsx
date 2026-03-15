import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-button">
      <FontAwesomeIcon icon={faMoon} size="2x" onClick={handleDarkMode} className="cursor-pointer" />
    </div>
  );
};

export default DarkModeButton;