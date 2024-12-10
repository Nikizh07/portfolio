import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";
import Heading from "./Heading";

const Home = () => {
  return (
    <div>
      <div className="container lg:mx-[150px]">
        <div className="hding my-[20px] p-2 lg:p-0">
          <Heading/>
        </div>
        <br />
        <p className="font-bold hidden lg:block">About Myself</p>
        <br />
        <p className="about hidden lg:block lg:w-[400px]">
          Hello there, I'm a self taught develop who's passionate about
          programming, I'm experienced in some popular languages as well, Feel
          free to contact me.
        </p>
        <br />
        <a
          href="mailto:nikizh007@gmail.com"
          className="gtc border-2 bg-[#cccccc] border-black hover:bg-black hover:text-white hidden lg:inline-block"
        >
          Get in touch
        </a>
        <div className="nv lg:my-[170px]">
        <NavContainer/>
        </div>
      
      </div>
    </div>
  );
};

export default Home;
