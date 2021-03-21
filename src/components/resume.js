import React, { Component } from "react";
import "./resume.css";
import resumeI from "../images/resume.png";
class resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume-main">
        <div className="resume-wrapper">
          <h1 className="resume-title">Resume</h1>
          <div className="resume-content">
            <a href="https://drive.google.com/file/d/1xhSHPgtWQgb02devz8jUbDd13M1vUm9V/view?usp=sharing">
              <img className="resume-image" src={resumeI}></img>
            </a>
          </div>

          <p className="resume-subhead">Click image to get my resume</p>
        </div>
      </div>
    );
  }
}

export default resume;
