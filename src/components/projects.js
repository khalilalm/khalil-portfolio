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
        <div className="project-content">
<h1>Projects</h1>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
</video>
<img src={alEstate} className="al-estate-project"></img>
<span>Apexer</span>


<img src={apexer} className="apexer-project"></img>


<img src={kobe} className="kobe-tribute-project"></img>

</div>
</div> );
    }
}
 
export default projects;