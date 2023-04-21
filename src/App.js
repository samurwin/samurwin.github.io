import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Rwi from './pages/Rwi';
import Project from './pages/Project';

import { projectInfo } from './assets/projectInfo'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/portfolio'>
              <Portfolio projects={projectInfo} />
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route exact path='/portfolio/rwi-case-study' component={ Rwi } />

            {projectInfo.map((info) => (
              <Route exact path={info.path} key={info.title}>
                <Project projectInfo={info} />
              </Route>
            ))}

          </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
