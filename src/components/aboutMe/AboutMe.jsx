import "./AboutMe.scss";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";
import { BsChevronDown } from "react-icons/bs";

function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1>A little about me</h1>
      <div className="container">
        <div className="left">
          <img src="assets/gk.jpg" alt="goalkeeper" />
          <img src="assets/fishing.jpg" alt="fishing lure" />
          <img src="assets/game.jpg" alt="gaming" />
        </div>

        <div className="right">
          <div className="textAboutMe">
            <p>My name is Maximilian Haut Mayer, but you can call me Max :)</p>
            <p>
              Gaming, playing football, and fishing that's what I love to do.
            </p>
            <p>
              I am from Brasil, and I'm living in Portugal, with a background in
              Law. After coming to Portugal, in May 2020 I started to learn more
              about programming and became a Web Developer.
            </p>
          </div>
          <div className="techs">
            <h2>Tech knowledge</h2>
            <FaReact />
            <SiJavascript />
            <FaNodeJs />
            <FaHtml5 />
            <FaCss3Alt />
            <SiMongodb />
            <SiExpress />
          </div>
          <div className="arrowDown">
            <a href="#projects">
              <BsChevronDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
