import React, { useState, useEffect } from 'react';
import './portfolio.css';



function Portfolio() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 769;
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <div>

        </div>
    );
};

export default Portfolio;