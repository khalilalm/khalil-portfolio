import React, { Component } from "react";
import "./aboutMe.css";
import head from "../images/head.jpg";
import linkedIn from '../images/linkedIn-logo.png';
import email from "../images/email.png";
import gh from "../images/github.svg";
import {Link} from 'react-router-dom'
class aboutMe extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="aboutMe-main">
          <div className="bg-wrpper">
          <h1 className="aboutMe-text">Khalil Al-Mujeeb </h1>
          <h2 className="aboutMe-text">React Front-End Web Developer</h2>
           </div>
          <div className="img-container"></div>
          <img id="headShot" src={head}></img>
          <h3 className="aboutMe-text">About Me</h3>

          <ul>
            <li><b> I've been programming for 2 years but have been working with front end for about a year.</b></li>
            <li><b> Programming is a huge passion for me and I use this website to showcase my progress.</b></li>
            <li><b>I mainly do front end work, but have a firm grasp of the MERN stack.</b></li>
            
          </ul>
          <strong><p>For any business inquires contact me at the links below .</p></strong>
          {/* <p className="aboutMe-text">
          I'm a front-end React software developer currently living in Dunmore, PA. I've been programming for 2 years but have been working with front end for about a year. Programming is a huge passion for me and I use this website to showcase my progress. I mainly do front end work, but have a firm grasp of the MERN stack.
          For any business inquires contact me at the links below .
          </p> */}

          <a href="https://github.com/khalilalm"> <img src={gh}className='work-link'></img></a>
          <a to=""><img src={email} className='work-link'></img></a>  
          {/* Takeout and replace */}
         <Link to=""> <img src={linkedIn} className='work-link'></img></Link>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default aboutMe;
