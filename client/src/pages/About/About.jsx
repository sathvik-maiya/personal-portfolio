import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import about from "../../assets/images/about.png";
import Resume from "../../assets/docs/resume.pdf";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Fade bottom>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={about} height={600} width={600} alt="about_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
              <h1>About me</h1>
              <hr />
              <span className="y">WHY HIRE ME FOR YOUR NEXT PROJECT?</span>
              <p className="p1">
                I'm a skilled <b> SOFTWARE DEVELOPER</b> fluent in the language
                of web applications. I specialize in building powerful,
                user-friendly solutions using popular tools like
                React.js,Node.js and Express.js. I love turning your ideas into
                reality by creating applications that work smoothly and
                efficiently. Let's team up and bring your vision to life.
              </p>
              <p className="p2">
                I'm a <b>MERN STACK WEB DEVELOPER </b>passionate about web
                development.
              </p>

              <Fade bottom>
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
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
