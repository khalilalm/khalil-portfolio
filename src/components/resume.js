import React, { Component } from 'react';
import './resume.css';
import resumeI from '../images/resume-ss.png'
class resume extends Component {
    state = {  }
    render() { 
        return ( <div className='resume-wrapper'>
            <h1 className='resume-title'>Resume</h1>
            <div className="resume-content">
            
            <a className="resume-image" href="../resources/WebDeveloperResume.pdf" download>
            <img src={resumeI} ></img>
            </a>
            
            
            </div>
            <p className="resume-subhead">Click image to get my resume</p>
        </div> );
    }
}
 
export default resume;