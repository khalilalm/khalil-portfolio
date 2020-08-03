import React, { Component } from "react";
import './skills.css';
import htmlCss from '../images/htmlcss.png'
import bootstrap from '../images/boot.png'
import react from '../images/react.png'
import express from '../images/express.png'
import node from '../images/node.png'
import mongo from '../images/mongo.png'
import java from '../images/java.png'
import javascript from '../images/javascript.png'
class skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-wrapper">
        <h1 style={{ "text-align": "center", }}>Skills</h1>
        <div className="skills-content">
            <img src={htmlCss} className="skill-imgs"></img>
            <img src={bootstrap} className="skill-imgs"  style={{ "width": "250px" }}></img>
            <img src={react} className="skill-imgs" style={{ "width": "350px" }}></img>
            <img src={express} className="skill-imgs"></img>
            <img src={node} className="skill-imgs"></img>
            <img src={mongo} className="skill-imgs"  style={{ "width": "200px" }}></img>
            <img src={java} className="skill-imgs"  style={{ "width": "200px" }}></img>
            <img src={javascript} className="skill-imgs"  style={{ "width": "200px" }}></img>
        </div>
      </div>
    );
  }
}

export default skills;
