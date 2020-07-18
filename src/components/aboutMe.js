import React, { Component } from "react";
import "./aboutMe.css";
import head from "../images/head.png";
import linkedIn from "../images/linkedIn-logo.png";
import email from "../images/email.png";
import gh from "../images/github.svg";
import { Link } from "react-router-dom";
class aboutMe extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="aboutMe-main">
          <div className="bg-wrpper">
            <h1 className="aboutMe-text">Khalil Al-Mujeeb </h1>
            <h2 className="aboutMe-text">Front-End Web Developer</h2>
          </div>
          <div className="img-container"></div>
          <img id="headShot" src={head}></img>
          <h3 className="aboutMe-text">About Me</h3>

          <ul>
            <p>
              <b>
                I've been programming for 2 years but have been working with
                front end for about a year.
              </b>
            </p>
            <p>
              <b>
                {" "}
                Programming is a huge passion for me and I use this website to
                showcase my progress.
              </b>
            </p>
            <p>
              <b>
                I mainly do front end work, but have a firm grasp of the MERN
                stack.
              </b>
            </p>
          </ul>
          <strong>
            <p>For any business inquires contact me at the links below .</p>
          </strong>

          <a href="https://github.com/khalilalm">
            {" "}
            <img src={gh} className="work-link"></img>
          </a>
         
          {/* Takeout and replace */}
          <a href="https://www.linkedin.com/in/khalil-al-mujeeb-234122100/">
            {" "}
            <img src={linkedIn} className="work-link"></img>
          </a>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default aboutMe;
