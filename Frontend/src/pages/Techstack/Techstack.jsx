import React from "react";
import "./Techstack.css";
import {Fade} from "react-awesome-reveal";
import { TechstackList } from "../../utils/TechstackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <Fade direction="up" triggerOnce="true" >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           <span  className="text-primary"> MY {" "}</span> SKILLS
          </h2>
        </Fade>
          <hr/>
            <Fade direction="left" triggerOnce="true">
        <div className="row">
          {TechstackList.map((tech) => (
          
              <div key={tech._id}  className="col-md-3 col-6">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5 className="tech-name">{tech.name}</h5>
                          <p className="exp ">{tech.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
          ))}
        </div>
         </Fade>
      </div>
    </>
  );
};

export default Techstack;
