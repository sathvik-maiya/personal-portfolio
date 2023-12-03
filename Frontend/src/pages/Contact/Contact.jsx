import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin ,BsInstagram} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {Fade } from "react-awesome-reveal";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
axios.defaults.withCredentials = true;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg ||!phone || !subject) {
        toast.error("Please Provide all fields",{ className: 'foo-bar'});
      }
      const res = await axios.post("https://personal-portfolio-api-beta.vercel.app/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
        phone,
        subject
      });
    
      
      if (res.data.success) {
        toast.success(res.data.message,{ className: 'foo-bar'});
        setname("");
        setEmail("");
        setMsg("");
        setPhone("");
        setSubject("");
      } else {
        toast.error(res.data.message,{ className: 'foo-bar'});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <Fade direction="up" triggerOnce="true">
      <div className="contact" id="contact">
        <div className=" card0 border-0 contact-imp">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
            <div className="row continfo">
                     <h1 className="text-center text-uppercase conhead">
                       Contact <span className="text-primary">Me</span>
                       <hr className="cont-hr"/>
                     </h1>
                     <div className="loc ">
                      <IoLocationOutline color="white" size={30}/>
                      {" "}
                       Bangalore,Karnataka,India
                     </div>
                   
                 <div className="log">
                <a href="https://www.linkedin.com/in/sathvik-v-maiya-034939254/" target="_blank" rel="noopener noreferrer">
               <BsLinkedin color="blue" size={30} className="ms-4 " />
               </a>
                <a href="https://github.com/sathvik-maiya" target="_blank" rel="noopener noreferrer">
               <BsGithub color="white" size={30} className="ms-4" />
               </a>
                <a href="http://facebook.com/sathwikmaiya" target="_blank" rel="noopener noreferrer">
              <BsFacebook color="blue" size={30} className="ms-4" />
               </a>
                <a href="https://instagram.com/_sathvik_sathvik_" target="_blank" rel="noopener noreferrer">
             <BsInstagram color="white" size={30} className="ms-4" />
               </a>
         </div>

         <div className="text-center or text-white">Or</div>
                    </div>

          
            </div>
            <div className="col-lg-6 col-md-6 ">
             
                <div className="card2 d-flex ">
                    
                  <div className="row">
                     

                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                       <div className="row px-3 ">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className="mb-3"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="row px-3 ">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                        <div className="row px-3 ">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Write your subject"
                        className="mb-3"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
           
            </div>
            
               </div>
      </div>
      </Fade>
    </>
  );
};

export default Contact;
