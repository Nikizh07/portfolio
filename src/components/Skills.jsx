import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import NavContainer from "./NavContainer";
import data from "../data/skil";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const Skills = () => {
  return (
    <div>
      <div className="container page-shell lg:mx-[150px] lg:px-0">
        <div className="page-header my-[15px]">
          <div className="hding lg:mr-[200px]">
            <Heading />
          </div>
          <div className="corner-toggle pt-1 lg:my-[20px]">
            <DarkModeButton />
          </div>
          <div className="ncontainer my-[8px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <div className="mobimenu mt-4 lg:hidden">
          <MobileMenu />
        </div>
        <div className="my-8">
          <h1 className="page-title sname">Skills</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mr-[200px] lg:grid-cols-4 lg:gap-6">
          {data.skills.map((element) => {
            return (
              <div key={element.name} className="skbox border border-gray-300 flex flex-col">
                <div className="container flex flex-col h-full p-4">
                  <h1 className="font-bold text-sm sm:text-base">{element.name}</h1>
                  <div className="sklls mt-4 flex flex-wrap gap-2">
                    {element.content.map((e) => (
                      <div
                        key={e.name}
                        className="skill-chip skname inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px]"
                      >
                        <span className="skill-chip-icon flex h-5 w-5 items-center justify-center rounded-full text-[11px]">
                          <FontAwesomeIcon icon={e.icon} />
                        </span>
                        <span>{e.name}</span>
                      </div>
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
