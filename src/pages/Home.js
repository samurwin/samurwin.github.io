import React from 'react';
import './home.css';

import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Link from "../components/Link";

function Home() {
    return (
        <div className="wrapper">
        <section className="container hero">
            <div className="heroTxt">
                <h1 className="name">Samantha Urwin</h1>
                <p className="jobTitle">Web Designer & Full Stack Developer</p>
                <div className="mt-3 flex-row flex-wrap gapSm justify-center">
                    <Link color="secondary" text="Get in Touch" link="/contact"/>
                    <Link color="primary" text="View Portfolio" link="/portfolio"/>
                </div>
            </div>
            <div className="greenStar">
                <svg id="b" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" 
                viewBox="0 0 115.88 115.88"><g id="c">
                    <path d="M60.29,20.89L69.73,3.89c1.36-2.44,5.08-1.44,5.03,1.35l-.32,19.44c-.03,
                    2.11,2.26,3.43,4.06,2.35l16.68-10c2.4-1.44,5.12,1.29,3.68,3.68l-10,16.68c-1.08,
                    1.81,.24,4.1,2.35,4.06l19.44-.32c2.79-.05,3.79,3.67,1.35,5.03l-17,9.44c-1.84,
                    1.02-1.84,3.67,0,4.69l17,9.44c2.44,1.36,1.44,5.08-1.35,5.03l-19.44-.32c-2.11-.03-3.43,
                    2.26-2.35,4.06l10,16.68c1.44,2.4-1.29,5.12-3.68,3.68l-16.68-10c-1.81-1.08-4.1,
                    .24-4.06,2.35l.32,19.44c.05,2.79-3.67,3.79-5.03,1.35l-9.44-17c-1.02-1.84-3.67-1.84-4.69,
                    0l-9.44,17c-1.36,2.44-5.08,1.44-5.03-1.35l.32-19.44c.03-2.11-2.26-3.43-4.06-2.35l-16.68,
                    10c-2.4,1.44-5.12-1.29-3.68-3.68l10-16.68c1.08-1.81-.24-4.1-2.35-4.06l-19.44,.32c-2.79,
                    .05-3.79-3.67-1.35-5.03l17-9.44c1.84-1.02,1.84-3.67,0-4.69L3.89,46.15c-2.44-1.36-1.44-5.08,
                    1.35-5.03l19.44,.32c2.11,.03,3.43-2.26,2.35-4.06l-10-16.68c-1.44-2.4,1.29-5.12,3.68-3.68l16.68,
                    10c1.81,1.08,4.1-.24,4.06-2.35l-.32-19.44c-.05-2.79,3.67-3.79,5.03-1.35l9.44,17c1.02,1.84,3.67,
                    1.84,4.69,0Z" fill="none" stroke="#0f7173" strokeMiterlimit="10" strokeWidth="5"/></g>
                </svg>
            </div>
            <div className="orangeStar">
                <svg id="b" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" 
                viewBox="0 0 115.88 115.88"><g id="c">
                    <path d="M60.29,20.89L69.73,3.89c1.36-2.44,5.08-1.44,5.03,1.35l-.32,19.44c-.03,
                    2.11,2.26,3.43,4.06,2.35l16.68-10c2.4-1.44,5.12,1.29,3.68,3.68l-10,16.68c-1.08,
                    1.81,.24,4.1,2.35,4.06l19.44-.32c2.79-.05,3.79,3.67,1.35,5.03l-17,9.44c-1.84,
                    1.02-1.84,3.67,0,4.69l17,9.44c2.44,1.36,1.44,5.08-1.35,5.03l-19.44-.32c-2.11-.03-3.43,
                    2.26-2.35,4.06l10,16.68c1.44,2.4-1.29,5.12-3.68,3.68l-16.68-10c-1.81-1.08-4.1,
                    .24-4.06,2.35l.32,19.44c.05,2.79-3.67,3.79-5.03,1.35l-9.44-17c-1.02-1.84-3.67-1.84-4.69,
                    0l-9.44,17c-1.36,2.44-5.08,1.44-5.03-1.35l.32-19.44c.03-2.11-2.26-3.43-4.06-2.35l-16.68,
                    10c-2.4,1.44-5.12-1.29-3.68-3.68l10-16.68c1.08-1.81-.24-4.1-2.35-4.06l-19.44,.32c-2.79,
                    .05-3.79-3.67-1.35-5.03l17-9.44c1.84-1.02,1.84-3.67,0-4.69L3.89,46.15c-2.44-1.36-1.44-5.08,
                    1.35-5.03l19.44,.32c2.11,.03,3.43-2.26,2.35-4.06l-10-16.68c-1.44-2.4,1.29-5.12,3.68-3.68l16.68,
                    10c1.81,1.08,4.1-.24,4.06-2.35l-.32-19.44c-.05-2.79,3.67-3.79,5.03-1.35l9.44,17c1.02,1.84,3.67,
                    1.84,4.69,0Z" fill="none" stroke="#FFB870" strokeMiterlimit="10" strokeWidth="5"/></g>
                </svg>
            </div>
        </section>
        <About/>
        <CaseStudies/>

        <section className="container sectionSpacing flex-column gapMd">
            <div className="skillsCard">
                <div>
                    <h4 className="cardTitle">Technologies</h4>
                    <div className="line"></div>
                </div>
            </div>
            <div className="skillsCard">
                <div>
                    <h4 className="cardTitle">Education</h4>
                    <div className="line"></div>
                </div>
            </div>

            <div>
            <Link color="secondary" text="My Resume" link="/"/>
            </div>
        </section>
        </div>
    )
}

export default Home;