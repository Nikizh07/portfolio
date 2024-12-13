import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavContainer = () => {
  const location = useLocation();

  return (
    <div>
      <div className="skills container flex flex-col lg:flex-row gap-8 lg:gap-6 text-[#868686] p-2">
        <Link to="/about">
          <div className={`lnks ${location.pathname === '/about' ? 'bg-gray-600 text-white' : ''}`}>
            About Me
          </div>
        </Link>

        <Link to="/skills">
          <div className={`lnks ${location.pathname === '/skills' ? 'bg-gray-600 text-white' : ''}`}>
            Skills
          </div>
        </Link>
        
        <Link to="/links">
          <div className={`lnks ${location.pathname === '/links' ? 'bg-gray-600 text-white' : ''}`}>
            Links
          </div>
        </Link>

        <Link to="/projects">
          <div className={`lnks ${location.pathname === '/projects' ? 'bg-gray-600 text-white' : ''}`}>
            Projects
          </div>
        </Link>

        <Link to="/resume">
          <div className={`lnks ${location.pathname === '/resume' ? 'bg-gray-600 text-white' : ''}`}>
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavContainer;
