import React from "react";
import sinha from "../../Assets/image/sinhadp.jpg";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const About = ({ updatecurentpage }) => {
  return (
    <>
      <div>
        <img className="profile-img" src={sinha} />
      </div>

      <div className="profile-Name">Shubham Kumar Sinha</div>
      <div>
        <p>Front-end developer using React. From Data Science to Marketing, and Now Crafting Code!</p>
      </div>
      <div className="pages">
        <a
          onClick={() => updatecurentpage(true)}
          style={{
            textDecoration: updatecurentpage  === true ? "underline" : "",
          }}
        >
          Bio
        </a>
      </div>
      <div  className="pages">
        <a
          onClick={() => updatecurentpage()}
          style={{
            textDecoration: updatecurentpage === true ? "underline" : "",
          }}
        >
          Blogs
        </a>
      </div>
      <div className="row">
        <div className="social-icon">
          <div className="social-icon">
            <a href="https://github.com/shubham-kumar-sinhas" target="_blank">
              <BsGithub />
            </a>
          </div>          
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/Shubham-kumar-sinha/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.twitter.com/Shubham5inha" target="_blank">
              <BsTwitter />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/Shubham5inha/" target="_blank">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
