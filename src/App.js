import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
