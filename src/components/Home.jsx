import NavContainer from "./NavContainer";
import Heading from "./Heading";
import DarkModeButton from "./DarkModeButton";

const Home = () => {
  return (
    <div>
      <div className="container page-shell lg:mx-[150px] lg:px-0">
        <div className="page-header my-2">
          <div className="max-w-[220px] sm:max-w-none">
            <Heading />
          </div>
          <div className="corner-toggle pt-1">
            <DarkModeButton />
          </div>
        </div>
        <div className="watermark hidden lg:block">
          <h1>NIKIZH</h1>
        </div>
        <p className="abm-text mt-8 font-bold text-lg sm:text-xl">
          About Myself
        </p>
        <p className="about mt-4 w-full max-w-[420px] text-sm sm:text-base">
          Hello there, I'm a self taught develop who's passionate about
          programming, I'm experienced in some popular languages as well, Feel
          free to contact me.
        </p>
        <a
          href="mailto:nikizh007@gmail.com"
          className="gtc mt-6 inline-flex w-full justify-center border-2 sm:w-auto"
        >
          Get in touch
        </a>
        <div className="nv mt-10 lg:my-[170px]">
          <NavContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
