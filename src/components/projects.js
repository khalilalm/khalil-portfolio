import React, { Component } from "react";
import "./projects.css";
import gymshark from "../images/gl.png";
import twitch from "../images/twitch.jpg";
import alEstate from "../images/home.jpg";
import apexer from "../images/Apexer.jpg";
import kobe from "../images/KB1.jpg";
import majaek from "../images/Majaek.jpg"

class projects extends Component {
  state = {};
  render() {
    return (
      <section class="my-projects" id="projects">
        <h2 className="section__title">Projects</h2>
        <p className="subtitle">Featured Projects</p>
        <div className="portfolio">
          {" "}

          {/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}
{/* </div> */}
          <a href="https://dazzling-jackson-8a355c.netlify.app/" target="_blank">
            <div
              className="textOverImage"
              data-text="Apexer                                                                                                                                                                                                                               Apex Stat Tracking App made using
           TRN developer api for stat information and then used express to
           get the URL for the api.                                                                                                                                                                                                                                                                                                                                                                                                                                                         Technologies: -HTML -CSS -React -NodeJS "
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={apexer}></img>
              </a>
            </div>
          </a>





          <a href="https://competent-shirley-ce4746.netlify.app" target="_blank">
            <div
              className="textOverImage"
              data-text="Kobe Bryant Tribute Page                                                                                                                                                                                                                                Tribute page showcasing HTML and CSS styling techniques under the
      react framework in an organized design pattern.                                                                                                                                                                                                                                                                                                                                                                                                                                                         Technologies: -HTML -CSS -React "
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={kobe}></img>
              </a>
            </div>
          </a>



          
          <a href="https://jolly-bohr-4cbb79.netlify.app" target="_blank">
            <div
              className="textOverImage"
              data-text="Al-Estate                                                                                                                                                                                                                              Full Stack Home Tracking app that
                  takes in housing info you want to keep with you and let's you
                  create, remove, edit and delete listings.                                                                                                                                                                                                                                                                                                                                                                                                                                                         Technologies: -HTML -CSS -React -NodeJS -MongoDB"
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={alEstate}></img>
              </a>
            </div>
          </a>
          <a href="https://trusting-montalcini-f0e213.netlify.app" target="_blank">
            <div
              className="textOverImage"
              data-text="Twitch Clone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                      A clone of the popular streaming website Twitch.tv. Uses up to react hooks, css grid, flexbox and other core css styling elements.                                                                                                                                                                                                                             Technologies: -HTML -CSS -React
          "
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={twitch}></img>
              </a>
            </div>{" "}
          </a>

{/* Gym shark */}
          <a href="https://gymshark-clone-5tm8c69a4-khalilalm.vercel.app/" target="_blank">
            <div
              className="textOverImage"
              data-text="GymShark Clone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                      A clone of the popular gym apparel website Gymshark.com. Used react slider for the banner display, css grid, flexbox and other css elements. Helped me get a better understanding of css flex, ui ux design and postioning in general.                                                                                                                                                                                                                            Technologies: -HTML -CSS -React
          "
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={gymshark}></img>
              </a>
            </div>{" "}
          </a>

          <a href="https://majaeks-heart.vercel.app/home" target="_blank">
            <div
              className="textOverImage"
              data-text="Majaek's Heart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
              Charity website in which I was involved in the creation and maintenance of website. Uses PayPal API to facilitate donations made to the organization. Used MailChimp API for newsletter advertisements and email listings                                                                                                                                                                                                                           Technologies: -HTML -CSS -React -Bootstrap
          "
            >
              <a className="portfolio-item" target="_blank">
                <img className="portfolio-img" src={majaek}></img>
              </a>
            </div>{" "}
          </a>



        </div>
      </section>
    );
  }
}

export default projects;
