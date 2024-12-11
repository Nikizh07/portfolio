import React from "react";
import Heading from "./Heading";
import NavContainer from "./NavContainer";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const About = () => {
  return (
    <div>
      <div className={`container lg:mx-[150px] p-4`}>
        <div className="flex">
          <div className="hding lg:mr-[200px] my-[15px]">
            <Heading />
          </div>
          <div className="right-5 absolute ">
            <DarkModeButton/>
          </div>
          <div className="ncontainer my-[20px] hidden lg:inline-block">
            <NavContainer />
          </div>
        </div>
        <div className="menu">
          <MobileMenu/>
        </div>
        <div className="content my-[50px]">
          <h1 className={`font-bold text-[30px]`}>About Myself</h1>

          <br />
          <p>
            <div className="container w-100% lg:w-[400px]">
              <p className="abt-myself">
                Hello there! I'm{" "}
                <span className="text-[#5b5b5b] font-bold">Nikizh</span> from
                Erode, Tamil Nadu. I'm currently pursuing a degree in{" "}
                <span className="text-[#5b5b5b] font-bold">
                  Computer Science
                </span>{" "}
                at{" "}
                <span className="text-[#5b5b5b] font-bold">
                  Bannari Amman Institute of Technology
                </span>
                . My journey into coding began with a fascination for Telegram
                bots, which quickly evolved into a deep passion for programming
                and technology. I'm currently working on becoming a{" "}
                <span className="text-[#5b5b5b] font-bold">fullstack dev</span>,
                I'm also learning new programming languages and frameworks,
                including{" "}
                <span className="text-[#5b5b5b] font-bold">React</span> ,{" "}
                <span className="text-[#5b5b5b] font-bold">Flutter</span>.
              </p>
            </div>
          </p>
        </div>
        <a
          href="mailto:nikizh007@gmail.com"
          className="gtc border-2 bg-[#cccccc] border-black hover:bg-black hover:text-white"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
