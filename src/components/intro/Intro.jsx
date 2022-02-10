import "./Intro.scss";
import { BsChevronDown } from "react-icons/bs";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Frontend Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/perfil.png" alt="Max" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Max</h1>
          <h3>
            <span ref={textRef}></span>
            <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <BsChevronDown />
        </a>
      </div>
    </div>
  );
}

export default Intro;
