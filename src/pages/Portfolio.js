import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './portfolio.css';
import { socialLinksAll } from '../assets/projectInfo'

import rwiThumbnail from '../assets/images/RWI-Labs-thumbnail.jpg'
import altitudeThumbnail from '../assets/images/altitude-thumbnail.png'
import Socials from '../components/Socials';

function Portfolio({projects}) {

    return (
        <div className="wrapper">
          <Helmet>
              <title>SMU Designs | Portfolio</title>
          </Helmet>

          <section className="sectionSpacing container max1000 flex-column align-center">
            <h1 className="text-primary text-center milgran">Portfolio</h1>
            <p className="text-secondary text-center my-4">
            Below you can find some of my recent website projects! 
            To see more of my general design work check out my Behance and Dribbble. 
            Similarly, to see source code for my projects check out my GitHub.
            </p>
            <div className="flex-row gapLg align-center">
              <Socials socialLinks={socialLinksAll} />
            </div>
          </section>

          <section className="sectionSpacing container max800">
            <h3 className="text-secondary text-center">Featured Projects</h3>
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

            <Link to='/portfolio/altitude-apparel'>
              <div 
                className="caseStudyImg my-4 cursorPointer"
                style={{ 
                    backgroundImage: `url(${altitudeThumbnail})`,
                    backgroundSize: 'cover',
                }}
              ></div>
              <div>
                <h4 
                className="text-primary text-center cursorPointer noDecoration"
                >
                  Altitude Apparel
                </h4>
                <p className="text-secondary text-center noDecoration">Active Wear Company</p>
                <div className="flex-row align-center justify-center gapSm">
                  <p className="tagTxt">Web Design</p>
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
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
    );
};

export default Portfolio;