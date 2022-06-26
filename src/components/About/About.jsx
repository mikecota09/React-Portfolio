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
      strings: ["leader", "full stack developer", "dedicated worker"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="public\images\IMG_1991.jpg" alt="profile pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome, I'm</h2>
          <h1>Michael Cota</h1>
          <h3>
            Full Stack Developer <span ref={textRef}></span>
          </h3>
          <p>
            I'm a developer currently in a full stack development bootcamp via
            Michigan State University. I have an extensive background in the
            food service industry and retail management industry. I'm excited to
            continue to grow my skills and knowledge as I continue this
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
