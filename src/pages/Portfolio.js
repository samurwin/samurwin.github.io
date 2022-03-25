import React from 'react';
import {Helmet} from 'react-helmet';
import './portfolio.css';
import Project from '../components/Project';

import placeholder from '../assets/images/portfolio-placeholder.png';

function Portfolio() {
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
    ]

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
                <div className='flex-row justify-space-between-lg justify-center align-center'>
                    <h2 className='milgran text-tertiary text-center col-5'>GRAPHIC DESIGN</h2>
                    <h2 className='milgran text-tertiary text-center col-5'>DEVELOPMENT</h2>
                </div>
                <div className='flex-row justify-space-between-lg justify-center align-center'>
                    <div className='design col-5'>
                        {designProjects.map((project) => (
                            <Project key={project.title} project={project} />
                        ))}
                    </div>
                    <div className='development col-5'>
                        {developmentProjects.map((project) => (
                            <Project key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;