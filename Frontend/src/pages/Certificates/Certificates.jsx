import React from "react";
import "./Certificates.css";
import {Fade} from "react-awesome-reveal";
import { SiUdemy } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { SiScrimba } from "react-icons/si";



const Certificates = () => {

   const projects = [
     {
       _id: 1,
        image_url: <SiUdemy /> ,
       title: "The Complete Node.js Developer Course",
       from:"Udemy",
       certificate_link: "https://www.udemy.com/certificate/UC-76d7e0f9-73e7-48db-a874-2878a3a9b342/",
     },
       {
       _id: 2,
        image_url: <SiUdemy />,
       title: " Just Express with a bunch of node and http in detail",
       from:"Udemy",
       certificate_link: "https://www.udemy.com/certificate/UC-e26ce709-7f66-4235-9895-d0808ae44c98/",
     },
       {
       _id: 3,
        image_url: <SiUdemy />,
       title: " Mongodb-The Complete Developer’s Guide ",
       from:"Udemy",
       certificate_link: "https://www.udemy.com/certificate/UC-47124240-87e3-4cf5-a686-8fe9e72b4db8/",
     },
        {
       _id: 4,
        image_url: <SiScrimba />,
       title: "React.js Beginner’s and Advanced course by Bob Zirol",
       from:"Scrimba",
       certificate_link: "https://scrimba.com/certificate/u3kaVzUL/greact",
     },
       {
       _id: 5,
       image_url: <SiCoursera />,
       title: "Introduction to Java",
       from:"Coursera",
       certificate_link: "https://www.coursera.org/account/accomplishments/verify/M3Y5LW9B7FS4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
     },
     {
       _id: 6,
       title: "Agile Methodology Virtual Experience Program - Cognizant USA",
       from:"Forage",
       certificate_link: "https://drive.google.com/file/d/1VbcQ5Ype4zgrWQDllGvOSz58hKbRA9Jr/view?usp=sharing",
     },

    
   ];


  return (
    <>
      <div className="certificate" id="certificates">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         CERTIFICATIONS
        </h2>

        <hr />
        <Fade direction="up" triggerOnce="true">
        <div className="row" id="ads">
          {projects.map((item) => {
            return (
          
                <div className="col-md-4 mb-3" key={item._id}>
                  <div className="card rounded">
                  
                 <div className="card-body text-center">
                      <div className="ad-title m-auto">
                        <h6 className=" text-white ">
                        {item.title}
                        </h6>

                      </div>
                      <div className="societyname">
                        <p className="text-end text-white"> {item.image_url} <span className="text-primary" style={{fontSize:"16px"}}>{item.from}</span></p>
                      </div>
                      <a
                        className="ad-btn"
                        href={item.certificate_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View certificate 
                      </a>
                    </div>
                  </div>
                </div>
             
            );
          })}
  
        </div>
         </Fade>
      </div>
    </>
  );
};

export default Certificates;
