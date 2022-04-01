import React from 'react';
import './about.css';
import {Helmet} from 'react-helmet';
import ListItem from '../components/ListItem';

import ACC from '../assets/icons/tech/adobe-creative-cloud-icon.svg';
import JS from '../assets/icons/tech/javascript-icon.svg';
import RCT from '../assets/icons/tech/react-icon.svg';
import MDB from '../assets/icons/tech/mongodb-icon.svg';
import SQL from '../assets/icons/tech/mysql-icon.svg';
import GQL from '../assets/icons/tech/graphql-icon.svg';
import NJS from '../assets/icons/tech/nodejs-icon.svg';
import CSS from '../assets/icons/tech/css-3-Icon.svg';
import HTML from '../assets/icons/tech/html-5-icon.svg';

import star from '../assets/icons/star.svg';

function About() {

    const technologies = [
        {
            title: 'ADOBE CREATIVE CLOUD',
            svg: ACC
        },
        {
            title: 'JAVASCRIPT',
            svg: JS
        },
        {
            title: 'REACT',
            svg: RCT
       
        },
        {
            title: 'MONGODB',
            svg: MDB
        },
        {
            title: 'MYSQL',
            svg: SQL
        },
        {
            title: 'GRAPHQL',
            svg: GQL
        },
        {
            title: 'NODE.JS',
            svg: NJS
        },
        {
            title: 'CSS 3',
            svg: CSS
        },
        {
            title: 'HTML 5',
            svg: HTML
        }
    ];

    const education = [ 
        {
            title: 'ADVERTISING & GRAPHIC DESIGN',
            svg: star,
            subheading: 'HUMBER COLLEGE'
        },
        {
            title: 'FULL STACK CODING BOOTCAMP',
            svg: star,
            subheading: 'UNIVERSITY OF TORONTO'
        }
    ];

    return (
        <div>
            <Helmet>
                <style>{'body { background: radial-gradient(#36393B, #252729); }'}</style>
            </Helmet>
            {/* ABOUT ME */}
            <section className='slanted-left'>
                <div className='container flex-row justify-center justify-space-between-lg align-center'>
                    <div className='col-8 col-lg-5 col-xl-4 about-img'>
                        <img 
                            src={require('../assets/images/about-me.jpg')} 
                            alt='Samantha Urwin on the Street' 
                        />
                    </div>

                    <div className='col-10 col-lg-7 col-xl-8 about-text'>
                        <div className='about-title'>
                            <h1 className='milgran text-quatrinary s'>HI I'M SAM! </h1>
                            <span className='desc text-quatrinary'>DESIGNER / DEVELOPER - TORONTO, ON</span>
                        </div>

                        <p className='text-dark pt-4'>
                        You can find me designing brand identities, websites or exploring my new found passion for coding 
                        and front-end development. My current focus is in combining my skills in design and development in 
                        order to create accessible, responsive web designs.
                        </p>
                        <br></br>
                        <p className='text-dark'>
                        I would describe myself as a dualistic person. Creativity comes easily to me and so does logic and organization. 
                        </p>
                        <br></br>
                        <p className='text-dark'>
                        Outside of work I enjoy keeping a healthy, active lifestyle - cooking delicious meals, enjoying nature, and practicing yoga.                         </p>
                    </div>
                </div>

            </section>

            {/* RESUME */}
            <section className='container'>
                {/* CONTACT */}
                <div className='section-spacing flex-column justify-center justify-space-between-lg align-center contact'>
                    <div className='flex-row'>
                        <img 
                            src={star}
                            alt=''
                            className='star pr-2'
                        />
                        <h1 className='milgran text-primary'>CONTACT ME</h1>
                    </div>
                    <div className='contact-links flex-column justify-center align-start-lg align-center'>
                        <a href='mailto:urwinsamantha@gmail.com' className='underline'><span></span>URWINSAMANTHA@GMAIL.COM</a>
                        <a 
                        href='https://drive.google.com/file/d/1XIGmPSdUwjZCGlBuAxCZAaZYDSMuynyK/view?usp=sharing' 
                        target='_blank' rel="noreferrer"
                        className='underline pt-3'> <span></span>RESUME</a>
                    </div>
                </div>

                {/* TECHNOLOGIES LIST */}
                <div className='section-spacing'>
                    <h2 className='milgran text-secondary subhead'>TECHNOLOGIES</h2>
                    <ul className='tech-list mt-5'>
                        {technologies.map((technology) => (
                            <ListItem 
                            title={technology.title}
                            key={technology.title}
                            svg={technology.svg}
                            />
                        ))}
                    </ul>
                </div>

                {/* EDUCATION LIST */}
                <div className='section-spacing'>
                    <h2 className='milgran text-secondary subhead'>EDUCATION</h2>
                    <div id='education' className='flex-row align-center justify-center justify-space-between-md mt-5'>
                        {education.map((degree) => (
                            <ListItem
                            title={degree.title}
                            key={degree.title}
                            subheading={degree.subheading}
                            svg={degree.svg}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default About;