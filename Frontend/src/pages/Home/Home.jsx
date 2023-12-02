import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import home from "../../assets/images/about.png";
import Resume from "../../assets/docs/resume.pdf";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="content">
              <h1 className="hi text-white">
                HEY there! <span class="wave">👋</span> 
              </h1>
                <Flip top>
              <div className="name-head hi text-white">
                I AM <span></span>
                <span className="name-body">
                  <h2 className="text-primary ">
                    SATHVIK V MAIYA
                  </h2>
                </span>
              </div>
            </Flip>
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
              <Fade bottom>
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
            
                  
              </Fade>
             
         
        </div>
         <Fade>
        <div  className="image-about">
           <img src={home} alt="home pic" height={520} width={600} />
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
