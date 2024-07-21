import React from "react";
import "./About.css";
import {Fade} from "react-awesome-reveal";
import myImg from "../../assets/images/avatar.svg";


const About = () => {
  return (
    <div>
      <Fade direction="left" >
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
               <h1 className="text-white phone-about">About {" "}<span className="text-primary">me</span></h1>
                 <hr className="phone-hr"/>
               <img src={myImg}  height={300} width={300}alt="about_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
              <h1 className="text-white lap-about">About {" "}<span className="text-primary">me</span></h1>
              <hr className="lap-hr" />
              
              <p className="p1">
                I'm a skilled <b className="text-primary"> SOFTWARE DEVELOPER</b> fluent in the language
                of web applications. I specialize in building powerful,
                user-friendly solutions using popular tools like
                React.js,Node.js and Express.js. I love turning your ideas into
                reality by creating applications that work smoothly and
                efficiently. Let's team up and bring your vision to life.
              </p>
                <p className="p2">
                I'm a <b className="text-primary">MERN/JAVA DEVELOPER </b>passionate about web
                development.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
