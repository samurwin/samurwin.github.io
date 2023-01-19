import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Rwi from './pages/Rwi';

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

            <Route exact path='/portfolio' component={Portfolio} />

            <Route exact path='/contact' socialLinks={ socialLinks } component={Contact} />

            <Route exact path='/portfolio/rwi-case-study' component={ Rwi } />

          </Switch>
      </div>
    </Router>
  );
}

export default App;
