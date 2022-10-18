import React, { Component } from "react";
import "./resume.css";
import resumeI from "../images/kha-resume-img.png";
class resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume-main">
        <div className="resume-wrapper">
          <h1 className="resume-title">Resume</h1>
          <div className="resume-content">
            <a href="https://docs.google.com/document/d/1YjuZEijqbWI1fG6C1SF_Xi5izQecOmPP/edit?usp=sharing&ouid=102019679261095126740&rtpof=true&sd=true" target="_blank">
              <img className="resume-image" src={resumeI}></img>
            </a>
          </div>

          <p className="resume-subhead">Click image above to get my resume</p>
        </div>
      </div>
    );
  }
}

export default resume;
