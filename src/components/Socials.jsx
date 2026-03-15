import Heading from "./Heading";
import NavContainer from "./NavContainer";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const Socials = () => {
  return (
    <div>
      <div className="container page-shell lg:mx-[150px] lg:px-0">
        <div className="page-header my-[15px]">
          <div className="lg:mr-[200px]">
            <Heading />
          </div>
          <div className="corner-toggle pt-1">
            <DarkModeButton />
          </div>

          <div className="fuck my-[8px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <div className="mt-4 lg:hidden">
          <MobileMenu />
        </div>
        <div className="hhding">
          <p className="lnk-title mt-8">Links</p>
        </div>

        <div className="lcontainer mt-6 grid w-full max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="lnks w-full text-center">
            <a href="https://github.com/Nikizh07" className="p-2">
              Github
            </a>
          </div>
          <div className="lnks w-full text-center">
            <a href="https://www.instagram.com/_nikz._07/" className="p-2">
              Instagram
            </a>
          </div>
          <div className="lnks w-full text-center">
            <a href="https://www.linkedin.com/in/nikizh/" className="p-2">
              Linkedin
            </a>
          </div>
          <div className="lnks w-full text-center">
            <a href="mailto:nikizh007@gmail.com" className="p-2">
              Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
