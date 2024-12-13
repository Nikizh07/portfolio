import React from "react";
import { Link } from "react-router-dom";

const NavContainer = () => {
  return (
    <div>
      <div className="skills container flex flex-col lg:flex-row gap-8 lg:gap-6 text-[#868686] p-2">
        <Link to="/about">
          <div className="lnks">
            About Me  
          </div>
        </Link>

        <Link to="/skills">
          <div className="lnks">
            Skills
          </div>
        </Link>
        
        <Link to="/links">
          <div className="lnks">
            Links
          </div>
        </Link>

        <Link to="/projects">
          <div className="lnks">
            Projects
          </div>
        </Link>

        <Link to="/resume">
          <div className="lnks">
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavContainer;
