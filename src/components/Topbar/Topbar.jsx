import React from "react";
import "./topbar.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            Michael Cota
          </a>
          <div className="itemContainer">
            <ul>
              <li>
                <a href="https://github.com/mikecota09" target="_blank">
                  <GitHubIcon className="icon"></GitHubIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michael-cota-41677522b/"
                  target="_blank"
                >
                  <LinkedInIcon className="icon"></LinkedInIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
