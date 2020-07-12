import React from 'react';
import NavBar from './components/navBar'
import AboutMe from './components/aboutMe'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'
import {BrowserRouter} from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
    <div className="App">

     <NavBar />
     <AboutMe />
     <Skills />
     <Projects />
     <Resume />
     <Contact />
    </div>
    </BrowserRouter>
  );
}

export default App;
