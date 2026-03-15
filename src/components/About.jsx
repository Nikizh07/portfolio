import Heading from "./Heading";
import NavContainer from "./NavContainer";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

const About = () => {
  return (
    <div>
      <div className="container page-shell lg:mx-[150px] lg:px-0">
        <div className="page-header my-[15px]">
          <div className="hding lg:mr-[200px]">
            <Heading />
          </div>
          <div className="corner-toggle pt-1">
            <DarkModeButton />
          </div>
          <div className="ncontainer my-[8px] hidden lg:inline-block">
            <NavContainer />
          </div>
        </div>
        <div className="menu mt-4 lg:hidden">
          <MobileMenu />
        </div>
        <div className="content my-10 sm:my-12">
          <h1 className="page-title">About Myself</h1>
          <div className="mt-6 w-full max-w-[540px]">
            <p className="abt-myself">
              Hello there! I'm <span className="accent-text font-bold">Nikizh</span> from
              Erode, Tamil Nadu. I'm currently pursuing a degree in <span className="accent-text font-bold">Computer Science</span>{" "}
              at <span className="accent-text font-bold">Bannari Amman Institute of Technology</span>. My journey
              into coding began with a fascination for Telegram bots, which quickly evolved into a deep passion for
              programming and technology. I'm currently working on becoming a <span className="accent-text font-bold">fullstack dev</span>, and
              I'm also learning new programming languages and frameworks, including <span className="accent-text font-bold">React</span> and <span className="accent-text font-bold">Flutter</span>.
            </p>
          </div>
        </div>
        <a
          href="mailto:nikizh007@gmail.com"
          className="gtc inline-flex w-full justify-center border-2 sm:w-auto"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
