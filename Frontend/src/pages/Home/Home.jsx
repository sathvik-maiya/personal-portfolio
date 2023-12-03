import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import {Fade} from "react-awesome-reveal";
import home from "../../assets/images/intro.svg";
import Resume from "../../assets/docs/resume.pdf";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <Fade direction="left">
          
        <div className="content">
              <h1 className="hi text-white">
                <span className="text-success"> HEY</span> {" "} there!<span class="wave">👋</span> 
              </h1>
               
              <div className="name-head hi2 text-white">
                I AM <span></span>
                <span className="name-body">
                  <h2 className="text-primary ">
                    SATHVIK V MAIYA
                  </h2>
                </span>
              </div>
        
               <div className="dev">
                 <Typewriter
                      options={{
                        strings: ["FULL STACK WEB DEVELOPER","FRONTEND DEVELOPER","BACKEND DEVELOPER"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                
              </div>
                    <p className="p0">
                I'm a software developer based in India, passionate about creating awesome web applications. 
              </p>
        
               <div className="bthm">
                 <div className="home-buttons">
                  <a
                    className="btn btn-cv"
                    href={Resume}
                    download="sathvikvmaiya.pdf"
                  >
                    <b>Download Resume </b>

                    <FaDownload />
                  </a>
                </div>
                
                <div className="home-buttons">

                          <Link  to="contact" className="btn btn-cm" >
                   
                   <b> Contact Me</b>
                  </Link>
                </div>
               </div>
     
             
         
        </div>
        </Fade>
         <Fade direction="right">
        <div  className="image-about">
           <img src={home} alt="home pic" className="image-home"   />
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
