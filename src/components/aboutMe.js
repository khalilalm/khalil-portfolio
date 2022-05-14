import React, { Component } from "react";
import "./aboutMe.css";
import head from "../images/khalil-portrait.jpg";
import linkedIn from "../images/link.svg";
import instagram from "../images/insta.svg";
import gh from "../images/git.svg";
import { Link } from "react-router-dom";
class aboutMe extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="aboutMe-main">
          <div className="bg-wrpper">
            <h1 className="aboutMe-text"> &lt; Khalil Al-Mujeeb /&gt; </h1>
            <h2 className="aboutMe-text">Front-End Web Developer</h2>
          </div>
          <div className="img-container"></div>
          <img id="headShot" src={head}></img>
          <h3 className="aboutMe-text">About Me</h3>
          <div className="info-text">
            <ul>
              <p>
                <b>
                  I've been programming for 3 years and have been working with
                  Front-End Web development for about 2 year.
                </b>
              </p>
              <p>
                <b>
                  {" "}
                  Programming is a huge passion and I use this website to
                  showcase my favorite projects. I hope to help you with your professional/personal endeavors.
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
              <p>
                For any business inquires contact me at the links below. Feel
                free to browse my social links.
              </p>
            </strong>
          </div>
          <a href="https://github.com/khalilalm">
            {" "}
            <img src={gh} className="work-link"></img>
          </a>

          {/* Takeout and replace */}
          <a href="https://www.linkedin.com/in/khalil-al-mujeeb-234122100/">
            {" "}
            <img src={linkedIn} className="work-link"></img>
          </a>

          <a href="https://www.instagram.com/khalil_freelancing/">
            {" "}
            <img src={instagram} className="work-link"></img>
          </a>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default aboutMe;
