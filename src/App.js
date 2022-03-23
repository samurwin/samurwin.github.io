import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
