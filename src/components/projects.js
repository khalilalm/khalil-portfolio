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
<h1 id="project-title">Projects</h1>

<img src={alEstate} className="al-estate-project"></img>


<img src={apexer} className="apexer-project"></img>


<img src={kobe} className="kobe-tribute-project"></img>

</div>
</div> 
);
    }
}
 
export default projects;