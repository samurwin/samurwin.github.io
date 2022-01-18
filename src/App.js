import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
