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
                    <div className='col-8 col-md-5 col-xl-4 about-img'>
                        <img 
                            src={require('../assets/images/about-me.jpg')} 
                            alt='Samantha Urwin on the Street' 
                        />
                    </div>

                    <div className='col-10 col-md-7 col-xl-8 about-text'>
                        <div className='about-title'>
                            <h1 className='milgran text-quatrinary'>HI I'M SAM! </h1>
                            <span className='desc text-quatrinary'>DESIGNER / DEVELOPER - TORONTO, ON</span>
                        </div>

                        <p className='text-dark pt-4'>
                            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
                            convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.
                            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat,
                            accumsan id imperdiet et, porttitor at sem.
                        </p>
                        <br></br>
                        <p className='text-dark'>
                            Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque
                            nec, egestas non nisi. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
                            Pellentesque in ipsum id orci porta dapibus.
                        </p>
                    </div>
                </div>

            </section>

            {/* RESUME */}
            <section className='container'>
                {/* CONTACT */}
                <div className='section-spacing flex-row justify-center justify-space-between-md align-center'>
                    <div className='flex-row'>
                        <img 
                            src={star}
                            alt=''
                            className='star pr-2'
                        />
                        <h1 className='milgran text-primary'>CONTACT ME</h1>
                    </div>
                    <div className='contact-links'>
                        <h5 className='text-primary underline'><span></span> URWINSAMANTHA@GMAIL.COM</h5>
                        <h5 className='text-primary underline pt-3'><span></span> RESUME</h5>
                    </div>
                </div>

                {/* TECHNOLOGIES LIST */}
                <div className='section-spacing'>
                    <h2 className='milgran text-secondary'>TECHNOLOGIES</h2>
                    <ul className='tech-list mt-5 ml-4'>
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
                    <h2 className='milgran text-secondary'>EDUCATION</h2>
                    <div id='education' className='flex-row align-center justify-center justify-space-between-md mt-5 ml-4'>
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