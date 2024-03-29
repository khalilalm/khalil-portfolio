import React, { Component } from "react";
import "./navBar.css";

import { Link } from "react-scroll";
class navBar extends Component {
  
  render() {
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
 
    //Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation){
          link.style.animation ='';
        }else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
        }
      });

      burger.classList.toggle('toggle');
    });
  }
    return (
      <div className="nav-content">
        {/* <div class="navbar-nav">
            <Link smooth={true} duration={1000} to="">
              <a class="nav-item nav-link active" href="#">
                About Me<span class="sr-only">(current)</span>
              </a>
            </Link>
            <Link smooth={true} duration={1000} to="skills-wrapper">
              <a class="nav-item nav-link active" href="#">
                Skills
              </a>
            </Link>
            <Link smooth={true} duration={1000} to="my-projects">
              <a class="nav-item nav-link active" >
                Projects
              </a>
            </Link>
          </div> */}
        <nav className="navbar">
          <div className="logo">
            {" "}
            <h4>&lt; Khalil Al-Mujeeb's Web Portfolio /&gt;</h4>
          </div>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link
                className="Nav-a"
                to="aboutMe-main"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="Nav-a"
                to="line"
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                className="Nav-a"
                to="my-projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="Nav-a"
                to="projects-end"
                smooth={true}
                duration={1000}
              >
                Resume
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="Nav-a"
                to="contact-container"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
       
      </div>
    );
  }
}

export default navBar;
