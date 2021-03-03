import React, { Component } from "react";
import "./projects.css";
import gh from "../images/github.svg";
import twitch from "../images/twitch.jpg";
import alEstate from "../images/home.jpg";
import apexer from "../images/Apexer.jpg";
import kobe from "../images/KB1.jpg";

class projects extends Component {
  state = {};
  render() {
    return (
      <section class="my-projects" id="projects">
        <h2 className="section__title">Projects</h2>
        <p className="subtitle">My Favorite Projects</p>
        <div className="portfolio">
          {" "}
          <a href="https://dazzling-jackson-8a355c.netlify.app/">
            <div
              className="textOverImage"
              data-text="Apexer                                                                                                                                                                                                                               Apex Stat Tracking App made using
           TRN developer api for stat information and then used express to
           get the URL for the api.                                                                                                                                                                                                                             Technologies: -HTML -CSS -React -NodeJS "
            >
              <a className="portfolio-item">
                <img className="portfolio-img" src={apexer}></img>
              </a>
            </div>
          </a>
          <a href="https://competent-shirley-ce4746.netlify.app">
            <div
              className="textOverImage"
              data-text="Kobe Bryant Tribute Page                                                                                                                                                                                                                                Tribute page showcasing HTML and CSS styling techniques under the
      react framework in an organized design pattern.                                                                                                                                                                                                                              Technologies: -HTML -CSS -React "
            >
              <a className="portfolio-item">
                <img className="portfolio-img" src={kobe}></img>
              </a>
            </div>
          </a>
          <a href="https://jolly-bohr-4cbb79.netlify.app">
            <div
              className="textOverImage"
              data-text="Al-Estate                                                                                                                                                                                                                              Full Stack Home Tracking app that
                  takes in housing info you want to keep with you and let's you
                  create, remove, edit and delete listings.                                                                                                                                                                                                                             Technologies: -HTML -CSS -React -NodeJS -MongoDB"
            >
              <a className="portfolio-item">
                <img className="portfolio-img" src={alEstate}></img>
              </a>
            </div>
          </a>
          <a href="https://trusting-montalcini-f0e213.netlify.app">
            <div
              className="textOverImage"
              data-text="Twitch Clone                                                                                                                                                                                                                             A clone of the popular streaming website twitch. Uses up to react hooks, css grid, flexbox and other core css styling elements.                                                                                                                                                                                                                             Technologies: -HTML -CSS -React
          "
            >
              <a className="portfolio-item">
                <img className="portfolio-img" src={twitch}></img>
              </a>
            </div>{" "}
          </a>
        </div>
      </section>
    );
  }
}

export default projects;
