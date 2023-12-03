import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";
import About from "../../pages/About/About";
import Education from "../../pages/Educations/Education";
import Techstack from "../../pages/Techstack/Techstack";
import Projects from "../../pages/Projects/Projects";
import Certificates from "../../pages/Certificates/Certificates";
import WorkExp from "../../pages/workExp/WorkExp";
import Contact from "../../pages/Contact/Contact";
import Header from "../../pages/Header/Header";
import { BiSolidHeart } from "react-icons/bi";

const Layout = () => {
  const [toggle, setToggle] = useState(true);


  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={25} />
              ) : (
                <AiOutlineDoubleRight size={25} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Header />
          <Home />
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Certificates/>
           <WorkExp />
            <Contact />
            <div className="pb-3 ms-3 footer">
            <p className="text-center text-white">
            Copyright @<span>sathvikvmaiya</span> 2023{" "}
            <BiSolidHeart color="red" />
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
