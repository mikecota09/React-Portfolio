import React from "react";
import "./resume.scss";

function Resume() {
  return (
    <div className="resume" id="resume">
      <h2>Michael Cota Resume</h2>
      <p>
        Note: Please find a{" "}
        <a
          href="https://drive.google.com/file/d/16dZdzf8tg-_G8PFWjpJ3QzHltKWKgFCS/view?usp=sharing"
          target="_blank"
        >
          downloadable resume here
        </a>
      </p>
      <p>
        I'm a developer currently in a full stack development bootcamp via
        Michigan State University. I have an extensive background in the food
        service industry and retail management industry. I'm excited to continue
        to grow my skills and knowledge as I continue this adventure.{" "}
      </p>
      <h3>Full Stack Development Experience</h3>
      <p>
        As a full stack developer in the Michigan State University Full Stack
        Development Coding Bootcamp, I have developed proficiency with these
        technologies:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Resume;
