import React from "react";
import "./Projects.css";
import shopay from "../../assets/images/Shopay.png";
import pet from "../../assets/images/pet.png";
import movie from "../../assets/images/movie.png";
import Fade from "react-reveal/Fade";

const Projects = () => {

   const projects = [
     {
       _id: 1,
       image_url: shopay,
       tech1: "MongoDB",
       tech2: "Express.js",
       tech3: "Node.js",
       tech4: "React.js",
       title: "E-commerce Website",
       github_deploylink: "https://vast-puce-wombat-wear.cyclic.app/",
     },
     {
       _id: 2,
       image_url: pet,
       tech1: "MongoDB",
       tech2: "Express.js",
       tech3: "Node.js",
       tech4: "JQuery",
       title: "Online pet Management",
       github_deploylink:
         "https://github.com/sathvik-maiya/ONLINE-PET-STORE-MANAGEMENT",
     },
     {
       _id: 3,
       image_url: movie,
       tech1: "Pandas",
       tech2: "Numpy",
       tech3: "Html",
       tech4: "JQuery",
       title: "Movie Recommendation system",
       github_deploylink:
         "https://github.com/sathvik-maiya/Movie-Recommendation-System",
     },

    
   ];


  return (
    <>
      <div className="project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          CHECK OUT MY {" "} <span className="text-primary">PROJECTS</span>
        </h2>

        <hr />
        <p className="pb-3 text-center" style={{color:"#B2BEB5"}}>
          These are a few of my collections of projects that showcase my passion
          for creating innovative solutions. Take a peek, and let's journey
          through how I've turned ideas into practical, awesome digital
          experiences.
        </p>
        <div className="row" id="ads">
          {projects.map((item) => {
            return (
              <Fade bottom>
                <div className="col-md-4" key={item._id}>
                  <div className="card rounded">
                    <div className="card-image">
                      <img src={item.image_url} alt="" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                      <span className="card-detail-badge">{item.tech1}</span>
                      <span className="card-detail-badge">{item.tech2}</span>
                      <span className="card-detail-badge">{item.tech3}</span>
                      <span className="card-detail-badge">{item.tech4}</span>
                    </div>
                    <div className="card-body text-center">
                      <div className="ad-title m-auto">
                        <h6 className="text-uppercase text-white ">
                          {item.title}
                        </h6>
                      </div>
                  
                      
                      <div>
                      
                      </div>
                      <a
                        className="ad-btn"
                        href={item.github_deploylink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
          <a
            className="git-btn"
            href="https://github.com/sathvik-maiya"
            target="_blank"
            rel="noreferrer"
          >
            See more
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
