import React from "react";
import "./about.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["marketer", "leader", "full stack developer"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="" alt="profile pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome, I'm</h2>
          <h1>Michael Cota</h1>
          <h3>
            Open source <span ref={textRef}></span>
          </h3>
          <p>About me</p>
        </div>
      </div>
    </div>
  );
}

export default About;
