import React, { Component } from "react";
import "./resume.css";
import resumeI from "../images/resume-ss.png";
class resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume-main">
        <h1 className="resume-title">Resume</h1>
        <div className="resume-wrapper">
          
          <div className="resume-content">
            <a
              
              href="https://drive.google.com/file/d/1uItmdK5P2hv2DrddRrw7gM3QSUQYLJqB/view"
            >
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
