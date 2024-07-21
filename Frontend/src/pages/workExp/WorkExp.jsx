import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work {" "} <span className="text-primary">Experience</span>
          </h2>
          <hr />
             <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              position="left"
              date="April 2024 - present"
              iconStyle={{ background: "#5F9EA0", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Nimblework
              </h4>
              <p className="info-work">
            
Currently interning at NimbleWork. I work on developing and maintaining web applications using React.js, Spring Boot, and MongoDB. I've improved test coverage by 3% with Jest and JUnit, enhancing product reliability. My responsibilities include managing enterprise user features with MUI DataGrid and contributing to the Nimble Retro team by enhancing features and ensuring high-quality delivery.
              </p>
            </VerticalTimelineElement>
           
      
          </VerticalTimeline>
           <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              position="right"
              date="March 2024 - April 2024"
              iconStyle={{ background: "#5F9EA0", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nectworks Technology
              </h4>
              <p className="info-work">
              During my internship at Nectworks Technology, I developed and maintained web applications using React.js, Express.js, Node.js, and MongoDB. I implemented integration with Amazon Simple Email Service (SES) to enhance the email system, ensuring efficient delivery and management of communications. Additionally, I developed dynamic notification functionality through Server-Sent Events (SSE), improving real-time user engagement.
              </p>
            </VerticalTimelineElement>
           
      
          </VerticalTimeline>
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="November 2023 - January 2024"
              iconStyle={{ background: "#5F9EA0", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HealTether Healthcare Pvt Ltd
              </h4>
              <p className="info-work">
               During my internship at HealTether Healthcare Pvt Ltd, I developed and maintained web applications using React.js, Express.js, Node.js, Tailwind, and MongoDB. I created RESTful APIs for various features, ensuring seamless communication between frontend and backend components. Additionally, I integrated the WhatsApp API to facilitate sending notifications and messages, which enhanced communication and user engagement.
              </p>
            </VerticalTimelineElement>
           
      
          </VerticalTimeline>
          
        </div>
      </div>
    </>
  );
};

export default WorkExp;
