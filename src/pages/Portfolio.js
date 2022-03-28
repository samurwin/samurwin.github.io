import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import './portfolio.css';
import LgProjectGallery from '../components/LgProjectGallery';
import SmProjectGallery from '../components/SmProjectGallery';

import placeholder from '../assets/images/portfolio-placeholder.png';

function Portfolio() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 769;
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const designProjects = [
        {
            title: "Trust Me Branding",
            image: "TM-project-img.jpg",
        },
        {
            title: "Sorgen Mørket",
            image: "SM-project-img.jpg",
        },
        {
            title: "The Basket Project",
            image: "BP-project-img.jpg",
        }
    ];

    const developmentProjects = [
        {
            title: "Savoury Subscriptions",
            image: "SS-project-img.jpg"
        },
        {
            title: "Dev Diaries",
            image: "DD-project-img.jpg"
        },
        {
            title: "Weather Dashboard",
            image: "WD-project-img.jpg"
        },
    ];

    return (
        <div>
            <Helmet>
                <style>{'body { background: radial-gradient(#36393B, #252729); }'}</style>
            </Helmet>

            <section className='slanted-right'>
                <div className='container flex-row justify-center justify-space-between-lg align-center'>
                    <div className='col-12 col-md-6'>
                        <h1 className='milgran text-quatrinary'>PORTFOLIO</h1>
                        <p className='text-dark'>View my projects in both design and development!</p>
                    </div>
                    <div className='col-6'>
                        <img
                        src={placeholder}
                        alt=''
                        className='placeholder'
                        />
                    </div>
                </div>
            </section>

            <section className='container section-spacing'>
                {width > breakpoint ? 
                    <LgProjectGallery designProjects={designProjects} developmentProjects={developmentProjects}/>
                    :
                    <SmProjectGallery designProjects={designProjects} developmentProjects={developmentProjects} />
                }
            </section>
        </div>
    );
};

export default Portfolio;