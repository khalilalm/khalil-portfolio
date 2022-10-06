import React, { Component } from "react";
import "./projects.css";
import gymshark from "../images/gl.png";
import twitch from "../images/twitch.jpg";
import alEstate from "../images/home.jpg";
import apexer from "../images/Apexer.jpg";
import kobe from "../images/KB1.jpg";
import majaek from "../images/Majaek.jpg";
import gh from "../images/git.svg";

class projects extends Component {
  state = {};
  render() {
    return (
      <section class="my-projects" id="projects">
        <h2 className="section__title">Projects</h2>
        <p className="subtitle">Featured Projects</p>
        <div className="portfolio">
          {" "}
          
          <div class="card" style={{ width: "10rem;" }}>
            <img className="portfolio-img"  src={kobe} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Kobe Bryant Tribute</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, Bootstrap, HTML, CSS</p>
              </h6>
              <p class="card-text">
                Page showcasing HTML and CSS styling techniques under the react
                framework in an organized design pattern.{" "}
              </p>
              <a href="https://github.com/khalilalm/kobe-tribute" target="_blank" class="card-link">
                <img src={gh} />
                View Code
              </a>
              <a
                href="https://competent-shirley-ce4746.netlify.app"
                class="card-link" target="_blank"
              >
                Live Site
              </a>
            </div>
          </div>
          
<div class="card" style={{ width: "10rem;" }}>
            <img class="card-img-top" className="portfolio-img" src={majaek} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Majaek's Heart</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, HTML, CSS, Javascript</p>
              </h6>
              <p class="card-text">
              Charity website in which I was involved in the creation and maintenance of website. Uses PayPal API to facilitate donations made to the organization. Used MailChimp API for newsletter advertisements and email listings.     
              </p>
              <a href="https://github.com/khalilalm/majaeks-heart" target="_blank" class="card-link">
                <img src={gh} />
                View Code
              </a>
              <a
               href="https://majaeks-heart.vercel.app/home"
               target="_blank"
                class="card-link"
              >
                Live Site
              </a>
            </div>
          </div>

          <div class="card" style={{ width: "10rem;" }}>
            <img className="portfolio-img" class="card-img-top" src={twitch} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Twitch Clone</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, HTML, CSS</p>
              </h6>
              <p class="card-text">
              A clone of the popular streaming website Twitch.tv. Uses up to react hooks, css grid, flexbox and other core css styling elements.{" "}
              </p>
              <a href="https://github.com/khalilalm/twitch-clone" target="_blank" class="card-link">
                <img src={gh} />
                View Code
              </a>
              <a
               href="https://trusting-montalcini-f0e213.netlify.app/" target="_blank"
                class="card-link"
              >
                Live Site
              </a>
            </div>
          </div>



          <div class="card" style={{ width: "10rem;" }}>
            <img class="portfolio-img" src={gymshark} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">GymShark Clone</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, HTML, CSS, Javascript</p>
              </h6>
              <p class="card-text">
              A clone of the popular gym apparel website Gymshark.com. Used react slider for the banner display, css grid, flexbox and other css elements. Helped me get a better understanding of css flex, ui ux design and postioning in general.
              </p>
              <a href="https://github.com/khalilalm/gymshark-clone" target="_blank" class="card-link" >
                <img src={gh} />
                View Code
              </a>
              <a
               href="https://gymshark-clone-5tm8c69a4-khalilalm.vercel.app/"
               target="_blank"
                class="card-link"
              >
                Live Site
              </a>
            </div>
          </div>
          
          <div class="card" style={{ width: "10rem;" }}>
            <img className="portfolio-img" class="card-img-top" src={alEstate} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Al-Estate</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, Nodejs, Express, HTML, CSS, Javascript</p>
              </h6>
              <p class="card-text">
                Full Stack Home Tracking app that takes in housing info you want to
                keep with you and let's you create, remove, edit and delete
                listings.{" "}
              </p>
              <a href="https://github.com/khalilalm/al-estate" target="_blank" class="card-link">
                <img src={gh} />
                View Code
              </a>
              <a
               href="https://jolly-bohr-4cbb79.netlify.app" target="_blank"
                class="card-link"
              >
                Live Site
              </a>
            </div>
          </div>

<div class="card" style={{ width: "10rem;" }}>
            <img className="portfolio-img"  src={apexer} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Apexer</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Technologies Used:
                <p>React, Nodejs, Express, HTML, CSS, Javascript</p>
              </h6>
              <p class="card-text">
                Stat Tracking App made using TRN developer api for stat
                information and then used express to get the URL for the api.{" "}
              </p>
              <a href="https://github.com/khalilalm/Apexer" target="_blank" class="card-link">
                <img src={gh} />
                View Code
              </a>
              <a
                href="https://dazzling-jackson-8a355c.netlify.app/"
                class="card-link"
                target="_blank">
                Live Site
              </a><div className="projects-end"></div>
            </div>
          </div>


      
          {/* Gym shark */}
        
          
          
        </div>
      </section>
    );
  }
}

export default projects;
