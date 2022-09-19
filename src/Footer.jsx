import React from "react";
import "./footer.css"
import { FaFacebook,FaGithub,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (<>
   <footer>
   <div className="container grid grid-three-column">

<div className="footer-about">
  <h3>Dbsmandal</h3>
  <p>Hi, I am Dipak Mandal And it is my 3rd Project in React, In this Project Some features are useContext,useEffect, useReducer,Fetch API etc</p>
</div>


<div className="footer-social">
  <h3>Check My Social Profile</h3>
  <div className="footer-social--icons">
    <div>
    <a
        href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
        target="_blank">
        <FaLinkedin className="icons" />
      </a>
  
    </div>
    <div>
    <a
     href="https://www.facebook.com/"
     target="_blank">
      <FaFacebook className="icons" />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/dbsmandal"
        target="_blank">
        <FaGithub className="icons" />
      </a>
    </div>
  </div>
</div>


<div className="footer-contact">
  <h3>Call Me</h3>
  <h3>+91 9734078407</h3>
</div>
</div>

   </footer>
  
  </>);
};
export default Footer;