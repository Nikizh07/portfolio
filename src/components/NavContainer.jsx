import React from 'react'
import { Link } from 'react-router-dom'

const NavContainer = () => {
  return (
    <div>
        <div className="skills container flex flex-col lg:flex-row gap-6 text-[#868686] p-2">
          <p id="aboutme">
            <Link
              to="/about"
              className="lnks"
            >
              About Me
            </Link>
          </p>
          <p id="Skills">
            <Link
              to="/skills"
              className="lnks"
            >
              Skills
            </Link>
          </p>
          <p id="Links">
            <Link
              to="/links"
              className="lnks"
            >
              Links
            </Link>
          </p>
          <p id="Projects">
            <Link
              to="/projects"
              className="lnks"
            >
              Projects
            </Link>
          </p>
          <p id="resume">
            <Link
              to="/resume"
              className="lnks"
            >
              Resume
            </Link>
          </p>
        </div>
      
    </div>
  )
}

export default NavContainer
