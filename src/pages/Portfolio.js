import React from 'react';
import { Link } from 'react-router-dom'
import './portfolio.css';

import rwiThumbnail from '../assets/images/RWI-Labs-thumbnail.jpg'

function Portfolio({projects}) {
    // const [width, setWidth] = useState(window.innerWidth);
    // const breakpoint = 769;
  
    // useEffect(() => {
    //   const handleWindowResize = () => setWidth(window.innerWidth)
    //   window.addEventListener("resize", handleWindowResize);
  
    //   // Return a function from the effect that removes the event listener
    //   return () => window.removeEventListener("resize", handleWindowResize);
    // }, []);

    return (
        <div className="wrapper">
          <section className="sectionSpacing container max1000">
            <h1 className="text-primary text-center milgran">Portfolio</h1>
            <p className="text-secondary text-center my-4">
            Below you can find some of my recent website projects! 
            To see more of my general design work check out my Behance, 
            and similarly to see source code for my projects check out my GitHub.
            </p>
          </section>

          <section className="sectionSpacing container max800">
            <h3 className="text-secondary text-center">Case Study</h3>
            <Link to='/portfolio/rwi-case-study'>
              <div 
                className="caseStudyImg my-4 cursorPointer"
                style={{ 
                    backgroundImage: `url(${rwiThumbnail})`,
                    backgroundSize: 'cover',
                }}
              ></div>
              <div>
                <h4 
                className="text-primary text-center cursorPointer noDecoration"
                >
                  RWI Labs
                </h4>
                <p className="text-secondary text-center noDecoration">Digital Marketing Agency</p>
                <div className="flex-row align-center justify-center gapSm">
                  <p className="tagTxt">Web Design</p>
                  <p className="tagTxt">Development</p>
                  <p className="tagTxt">Brand Design</p>
                </div>
              </div>
            </Link>
          </section>

          <section className="container sectionSpacing">
            <h3 className="text-secondary text-center">Projects</h3>
            <div className="my-4 flex-row gapLg justify-space-between align-center max1000 mx-auto">
              {projects.map((project) => (
                  <Link to={project.path} key={project.title} className="mx-auto cursorPointer">
                    <div
                    className="projectImg"
                    style={{ 
                      backgroundImage: `url(${project.bannerImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    >
                      {/* <img
                      src={project.bannerImg}
                      alt={`${project.title} project link`}
                      /> */}
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
    );
};

export default Portfolio;