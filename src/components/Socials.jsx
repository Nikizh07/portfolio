import React from "react";
import Heading from "./Heading";
import NavContainer from "./NavContainer";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const Socials = () => {
  return (
    <div>
      <div className="container lg:mx-[150px] p-4">
        <div className="headrr flex">
          <div className="my-[15px] lg:mr-[200px]">
            <Heading />
          </div>
          <div className="dmode right-5 top-10 absolute">
            <DarkModeButton />
          </div>

          <div className="fuck my-[20px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <br />
        <MobileMenu/>
        <div className="hhding">
          <p className="lnk-title">Links</p>
        </div>

        <br />
        <div className="lcontainer flex flex-wrap w-[30vw] gap-4">
          <div className="lnks inline-block w-[200px] lg:w-[10vw]">
            <a href="https://github.com/Nikizh07" className="p-2">
              Github
            </a>
          </div>
          <div className="lnks inline-block w-[200px] lg:w-[10vw]">
            <a href="https://www.instagram.com/_nikz._07/" className="p-2">
              Instagram
            </a>
          </div>
          <div className="lnks inline-block w-[200px] lg:w-[10vw]">
            <a href="https://www.linkedin.com/in/nikizh/" className="p-2">
              Linkedin
            </a>
          </div>
          <div className="lnks inline-block w-[200px] lg:w-[10vw]">
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
