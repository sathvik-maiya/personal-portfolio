import React from 'react'
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
  FcPortraitMode,
} from "react-icons/fc";
import "./Header.css"
import { IoNewspaperOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

function Sidenavbar({toggleburger}) {
  return (
    <>
        <div className='sidenav'>
             <div className='cross'>
                <MdClose color='white' size={30}    onClick={toggleburger} />
                 </div>
           <div className='sidenavitem'>
           

                      <div className='sidenavlink' > 
                            <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={toggleburger}
                  >
                    <FcHome size={20} />
                    Home
                  </Link>
                </div>
                   <div  className='sidenavlink' >
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                     onClick={toggleburger}
                  >
                    <FcAbout size={20} />
                    About
                  </Link>
                </div>
                   <div  className='sidenavlink'>
                       <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                     onClick={toggleburger}
                  >
                    <FcReadingEbook size={20} />
                    Education
                  </Link>
                </div>
                   <div className='sidenavlink' >
                       <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={toggleburger}
                  >
                    <FcBiotech size={20} />
                    Skills
                  </Link>
                </div>
                   <div className='sidenavlink' >
                     <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={toggleburger}
                  >
                    <FcVideoProjector size={20} />
                    Projects
                  </Link>
                </div>
                   <div className='sidenavlink' >
                      <Link
                  to="certificates"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleburger}
                >
                  <IoNewspaperOutline color="pink" size={22}/>
                  Certificates
                </Link>
                </div>
                   <div className='sidenavlink' >
                       <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={toggleburger}
                  >
                    <FcPortraitMode size={20} />
                    Work Experience
                  </Link>
                </div>
                   <div  className="sidenavlink">
                      <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                     onClick={toggleburger}
                  >
                    <FcBusinessContact size={20} />
                    Contact
                  </Link>
                </div>
           </div>
                   
            </div>
    </>
  )
}

export default Sidenavbar
