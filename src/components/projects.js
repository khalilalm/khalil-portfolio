import React, { Component } from 'react';
import './projects.css'
import logos from '../images/htmlcss.png'
import alEstate from '../images/Al-Estate.png' ;
import apexer from '../images/Apexer.png'
import kobe from '../images/kobe.png'

class projects extends Component {
    state = {  }
    render() { 
        return (
          <div className= "project-wrapper">
            <h1 id="project-title" style={{"text-align":"center"}}>Projects</h1>
        <div className="project-content">


<img src={alEstate} className="al-estate-project"></img>


<img src={apexer} className="apexer-project"></img>


<img src={kobe} className="kobe-tribute-project"></img>

</div>
<p style={{"text-align":"center"}}>View more on my Github <a href="">here</a></p>
</div> 
);
    }
}
 
export default projects;