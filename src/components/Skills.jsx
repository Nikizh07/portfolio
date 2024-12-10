import React from "react";
import Heading from "./Heading";
import NavContainer from "./NavContainer";
import data from "../data/skil";

const Skills = () => {
  return (
    <div>
      <div className="container mx-[150px]">
        <div className="flex">
          <div className="hding mr-[200px] my-[10px]">
            <Heading />
          </div>
          <div className="ncontainer my-[20px]">
            <NavContainer />
          </div>
        </div>
        <div className="my-[20px]">
          <h1 className="sname font-bold text-[30px]">Skills</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mr-[200px]">
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
