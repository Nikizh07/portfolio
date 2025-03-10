import React from "react";
import Heading from "./Heading";
import DarkModeButton from "./DarkModeButton";
import NavContainer from "./NavContainer";
import MobileMenu from "./MobileMenu";

const Resume = () => {
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

          <div className="fuck my-[8px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <br />
        <MobileMenu />
        <br />
        <div className="hhding">
          <p className="lnk-title">Resume</p>
        </div>
        <br />
        <iframe
          src="https://drive.google.com/file/d/1vsyNdcF5c4mKtJWJ1b3bPnzG71MMY9wY/preview"
          width="640"
          height="480"
          allow="autoplay"
          className="invisible lg:visible"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
