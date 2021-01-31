import React, { Component } from "react";
import "./skills.css";
import html from "../images/html.svg";
import css from "../images/css.svg";
import bootstrap from "../images/bootstrap.svg";
import react from "../images/react.svg";
import express from "../images/express.png";
import node from "../images/node.svg";
import mongo from "../images/mongo.png";
import java from "../images/java.svg";
import javascript from "../images/javascript.svg";
class skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-wrapper">
        <h1 style={{ "text-align": "center" }}>Skills</h1>

        <img src={html} className="skill-imgs"></img>
        <img src={css} className="skill-imgs"></img>
        <img src={javascript} className="skill-imgs"></img>
        <img src={java} className="skill-imgs"></img>
        <img src={react} className="skill-imgs"></img>
        <img src={bootstrap} className="skill-imgs"></img>
        <img src={node} className="skill-imgs"></img>
        <img src={express} className="skill-imgs"></img>
        <img src={mongo} className="skill-imgs"></img>
      </div>
    );
  }
}

export default skills;
