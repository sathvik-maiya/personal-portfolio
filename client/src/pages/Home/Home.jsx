import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import home from "../../assets/images/home.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <div className="data">
            <Flip top>
              <h3 className="soft">SOFTWARE DEVELOPER</h3>

              <h1 className="hi">
                HEY! <span class="wave">👋</span>
              </h1>
              <div className="name-head">
                I AM <span></span>
                <span className="name-body">
                  <h2 className="name">
                    <Typewriter
                      options={{
                        strings: [" SATHVIK V MAIYA"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                </span>
              </div>

              <p className="p0">
                Am an Indian-based Software Developer passionate and experienced
                in building web applications.
              </p>
            </Flip>
          </div>
          <div>
            <Fade>
              <div className="home-pic">
                <img src={home} alt="home pic" height={520} width={520} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
