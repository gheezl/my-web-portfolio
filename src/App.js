import React, { Fragment } from 'react';
import './App.css';

import Header from "./components/header/header.jsx"
import AboutMe from "./components/about-me/about-me.jsx"
import Projects from "./components/projects/projects.jsx"

const App = () => {
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Projects />
    </Fragment>
  )
}

export default App;
