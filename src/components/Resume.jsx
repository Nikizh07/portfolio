import React from 'react'
import Heading from './Heading'
import DarkModeButton from './DarkModeButton'
import NavContainer from './NavContainer'
import MobileMenu from './MobileMenu'

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
        <MobileMenu/>
        <br />
        <div className="hhding">
          <p className="lnk-title">Resume</p>
        </div>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRGT9TpCxFL2CW3oH8QretMlTfSyMX_IFoOLu34WiY9zLlqaE448gxnRrw4uy4FiFdoxs51Vzs8bGEL/pub?embedded=true"></iframe>
      </div>
    </div>
  )
}

export default Resume
