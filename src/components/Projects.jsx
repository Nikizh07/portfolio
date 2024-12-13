import React from 'react'
import Heading from './Heading'
import DarkModeButton from './DarkModeButton'
import NavContainer from './NavContainer'
import MobileMenu from './MobileMenu'

const Projects = () => {
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
        <MobileMenu/>
        <br />
        <div className="hhding">
          <p className="lnk-title">Projects</p>
        </div>


        </div>
    </div>
  )
}

export default Projects
