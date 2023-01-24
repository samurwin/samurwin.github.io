import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Rwi from './pages/Rwi';
import Project from './pages/Project';

import { projectInfo } from './assets/projectInfo'

const socialLinks = {
 githubURL: 'https://github.com/samurwin',
 linkedinURL: 'https://www.linkedin.com/in/samanthaurwin/',
 behanceURL: 'https://www.behance.net/samanthaurwin'
}

function App() {
  return (
    <Router>
      <div>
        <Header socialLinks={ socialLinks }/>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/portfolio'>
              <Portfolio projects={projectInfo} />
            </Route>

            <Route exact path='/contact'>
              <Contact socialLinks={socialLinks} />
            </Route>

            <Route exact path='/portfolio/rwi-case-study' component={ Rwi } />

            {projectInfo.map((info) => (
              <Route exact path={info.path} key={info.title}>
                <Project projectInfo={info} />
              </Route>
            ))}

          </Switch>
      </div>
    </Router>
  );
}

export default App;
