import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Heading from './Heading'
import DarkModeButton from './DarkModeButton'
import NavContainer from './NavContainer'
import MobileMenu from './MobileMenu'

const Projects = () => {
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
          <p className="lnk-title mt-8">Projects</p>
        </div>

        <p className="abt-myself mt-4 max-w-[540px]">
          A few things I build and maintain while learning in public.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:max-w-[760px]">
          <div className="skbox flex flex-col gap-4 border p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="page-title text-[24px] sm:text-[26px]">Docker Learning</h2>
                <p className="abt-myself mt-2 max-w-[560px]">
                  This is where I learn Docker, experiment with containers, and post what I build as I go.
                </p>
              </div>
              <a
                href="https://github.com/Nikizh07/docker-learning"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Docker Learning repository"
                className="inline-flex items-center justify-center self-start text-[28px] text-inherit transition-opacity duration-200 hover:opacity-70 sm:self-auto"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className="skills flex flex-wrap gap-2 text-sm">
              <span className="skill-chip rounded-full border px-3 py-1.5">Docker</span>
              <span className="skill-chip rounded-full border px-3 py-1.5">Containers</span>
              <span className="skill-chip rounded-full border px-3 py-1.5">Learning Log</span>
            </div>
          </div>
        </div>


        </div>
    </div>
  )
}

export default Projects
