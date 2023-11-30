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
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="November 2023 - present"
              iconStyle={{ background: "#5F9EA0", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HealTether
              </h4>
              <p>
                Currently interning at HealTether, I'm learning to build web apps using MongoDB, Express.js, React, and Node.js. I collaborate with a team to create user-friendly applications that merge technology with healthcare. It's an exciting journey where I contribute ideas, learn full-stack development and mastering these technologies. 
              </p>
            </VerticalTimelineElement>
           
      
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
