import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../PageViews/Home';
import About from '../PageViews/About';
import Projects from '../PageViews/Projects';
import Contact from '../PageViews/Contact';
import Skills from '../PageViews/Skills';
import ProjectDetails from '../PageViews/ProjectDetails';

export default function() {
  return (
    <main className="main">
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/Skills"   component={Skills} />
        <Route path="/projects"   component={Projects} />
        <Route path="/contact"  component={Contact} />
        <Route path="/projectDetails"  component={ProjectDetails} />
        
      </Switch>
    </main>
  );
}
