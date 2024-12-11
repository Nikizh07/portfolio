import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.style.backgroundColor = darkMode ? "#111216" : "#ffffff";
    document.body.style.color = darkMode ? "#cecece" : "#111216";
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-button">
      <FontAwesomeIcon icon={faMoon} size="2x" onClick={handleDarkMode} />
    </div>
  );
};

export default DarkModeButton;