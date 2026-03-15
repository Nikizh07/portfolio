import { Link, useLocation } from "react-router-dom";

const NavContainer = () => {
  const location = useLocation();

  return (
    <div>
      <div className="skills container grid grid-cols-2 gap-3 p-0 sm:gap-4 lg:flex lg:flex-row lg:gap-6 lg:p-2">
        <Link to="/about">
          <div className={`nav-link lnks w-full text-center ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
            About Me
          </div>
        </Link>

        <Link to="/skills">
          <div className={`nav-link lnks w-full text-center ${location.pathname === '/skills' ? 'nav-link-active' : ''}`}>
            Skills
          </div>
        </Link>
        
        <Link to="/links">
          <div className={`nav-link lnks w-full text-center ${location.pathname === '/links' ? 'nav-link-active' : ''}`}>
            Links
          </div>
        </Link>

        <Link to="/projects">
          <div className={`nav-link lnks w-full text-center ${location.pathname === '/projects' ? 'nav-link-active' : ''}`}>
            Projects
          </div>
        </Link>

        <Link to="/resume">
          <div className={`nav-link lnks w-full text-center ${location.pathname === '/resume' ? 'nav-link-active' : ''}`}>
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavContainer;
