import React, { Component } from 'react';
import './navBar.css'
import {Link} from 'react-scroll';
class navBar extends Component {
    
    render() { 
     
        return ( 
            <div className='nav-content'>
                <div class="bar">
                <ul class='left'><li class='nav-title' >Khalil Al-Mujeeb's Web Portfolio</li></ul>
                
                    <ul class="nav-links" >
                        <li className="nav-item"><Link to="aboutMe-main" smooth={true} duration={1000}>About Me</Link></li>
                        <li className="nav-item"><Link to="skills-wrapper" smooth={true} duration={1000}>Skills</Link></li>
                        <li className="nav-item"> <Link to="project-wrapper" smooth={true} duration={1000}>Projects</Link></li>
                       
                       <li className="nav-item">
                           <Link to="resume-main" smooth={true} duration={1000}>Resume</Link>
                       </li>
                        
                        <li className="nav-item">
                           <Link to="contact-main" smooth={true} duration={1000}>Contact</Link> 
                        </li>
                        
                    </ul>
                    
                </div>
            
            </div>
            
          );
    }
}
 
export default navBar ;