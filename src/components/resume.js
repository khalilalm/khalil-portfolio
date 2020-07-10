import React, { Component } from 'react';
import './resume.css';
import resumeI from '../images/resume-ss.png'
class resume extends Component {
    state = {  }
    render() { 
        return ( <div className='resume-wrapper'>
            <div className="resume-main">
            
            <h1 className='resume-title'>Resume</h1><a href="../resources/WebDeveloperResume.pdf" download>
            <img src={resumeI} className="resume-image"></img>
            </a>
            <p className="resume-subhead">Click image to get my resume</p>
            <br></br>
            </div>
        </div> );
    }
}
 
export default resume;