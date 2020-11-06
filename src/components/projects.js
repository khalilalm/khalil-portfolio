import React, { Component } from "react";
import "./projects.css";
import gh from "../images/github.svg";

import alEstate from "../images/Al-Estate.png";
import apexer from "../images/Apexer.png";
import kobe from "../images/kobe.png";

class projects extends Component {
  state = {};
  render() {
    return (
      <div className="project-wrapper">
        <h1 id="projects-title" style={{ "text-align": "center" }}>
          Projects
        </h1>
        <div className="project-content">
          <div className="project-section" style={{ display: "inline-block" }}>
            <h2 className="project-name">
              <a href="https://al-estate.herokuapp.com/">Al-Estate</a>
            </h2>
            <p>
              <strong>Description:</strong> Full Stack Home Tracking app that
              takes in housing info you want to keep with you and let's you
              create, remove, edit and delete listings.
            </p>
            <p>Made Using:</p>
            <div className="framework-content">
              <div className="f-icons">
                <p className="frameworks">Bootstrap</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">React</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">MongoDB</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">Express</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">Nodejs</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">HTML</p>
              </div>
              <div className="f-icons">
                <p className="frameworks">CSS</p>
              </div>
            </div>

            <img src={alEstate} className="al-estate-project"></img>
            <a href="https://github.com/khalilalm">
              {" "}
              <img src={gh} className="work-link"></img>
            </a>
          </div>
          <div className="project-section" style={{ display: "inline-block" }}>
            <h2 className="project-name">
              <a href="https://apexer.herokuapp.com/">Apexer</a>
            </h2>
            <p>
              <strong>Description:</strong> Apex Stat Tracking App made using
              TRN developer api for stat information and then used express to
              get the URL for the api.{" "}
            </p>
            <p>Made Using:</p>
            <div className="framework-content" style={{ padding: "28px" }}>
              <p className="frameworks">Bootstrap</p>
              <p className="frameworks">React</p>
              <p className="frameworks">Express</p>
              <p className="frameworks">Nodejs</p>
              <p className="frameworks">HTML</p>
              <p className="frameworks">CSS</p>
            </div>

            <img src={apexer} className="apexer-project"></img>
            <a href="https://github.com/khalilalm/Apexer">
              {" "}
              <img src={gh} className="work-link"></img>
            </a>
          </div>

          <div className="project-section" style={{ display: "inline-block" }}>
            <h2 className="project-name">
              <a href="https://kobetribute.herokuapp.com/">Kobe Tribute</a>
            </h2>
            <p>
              <strong>Description: </strong>
            Tribute page showcasing HTML and CSS styling techniques under the
              react framework in an organized design pattern.
            </p>
            <p>Made Using:</p>
            <div className="framework-content" style={{ padding: "18px" }}>
              <p className="frameworks">Bootstrap</p>
              <p className="frameworks">React</p>
              <p className="frameworks">HTML</p>
              <p className="frameworks">CSS</p>
            </div>

            <img src={kobe} className="kobe-tribute-project"></img>
            <a href="https://github.com/khalilalm/kobe-tribute">
              {" "}
              <img src={gh} className="work-link"></img>
            </a>
          </div>
        </div>
        <p style={{ "text-align": "center" }}>
          View more on my Github <a href="https://github.com/khalilalm">here</a>
        </p>
      </div>
    );
  }
}

export default projects;
