import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - present"
            iconStyle={{ background: "#5F9EA0", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Dr.Ambedkar Institute of Technology,Bangalore
            </p>
            <h5>Computer science</h5>
            <h6>CGPA:9.3</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2020"
            iconStyle={{ background: "#5F9EA0", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">INTERMEDIATE</h3>
            <p className="vertical-timeline-element-subtitle">
              MES Pu College,Malleshwaram
            </p>
            <h5>Science</h5>
            <h6>Percentage:93%</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(5, 8, 22)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2005 - 2018"
            iconStyle={{ background: "#5F9EA0", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">SCHOOL</h3>
            <p className="vertical-timeline-element-subtitle">
              Manjusha English High School,Bangalore
            </p>
            <h6>Percentage:94%</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
