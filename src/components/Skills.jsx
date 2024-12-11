import React from "react";
import Heading from "./Heading";
import NavContainer from "./NavContainer";
import data from "../data/skil";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const Skills = () => {
  return (
    <div>
      <div className="container lg:mx-[150px] p-2">
        <div className="flex">
          <div className="hding lg:mr-[200px] my-[10px]">
            <Heading />
          </div>
          <div className="right-5 top-6 absolute lg:my-[20px]">
          <DarkModeButton/>
          </div>
          <div className="ncontainer my-[20px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <div className="mobimenu p-2">
        <MobileMenu/>
        </div>
        <div className="my-[20px]">
          <h1 className="sname font-bold text-[30px]">Skills</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:mr-[200px]">
          {data.skills.map((element) => {
            return (
              <div className="skbox border border-gray-300 flex flex-col">
                <div className="container flex flex-col h-full p-4">
                  <h1 className="font-bold">{element.name}</h1>
                  <br />
                  <div className="sklls my-[10px]">
                    {element.content.map((e) => (
                      <p className="skname">{e.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
