import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: "Dev Diaries",
            github: "https://github.com/samurwin/dev-diaries",
            deployed: "https://polar-retreat-06699.herokuapp.com/",
            image: "dev-diaries.jpg",
            description: "Blog Forum. Created with Javascript, MySQL/Sequelize & TailwindCSS."
        },
        {
            title: "Budget Tracker",
            github: "https://github.com/samurwin/budget-tracker-PWA",
            deployed: "https://stormy-brook-60885.herokuapp.com/",
            image: "budget-tracker.jpg",
            description: "A Budget tracker PWA. Created with Javascript & MongoDB/Mongoose."
        },
        {
            title: "Surveyorama",
            github: "https://github.com/samurwin/surveyorama",
            deployed: "https://pacific-fortress-98134.herokuapp.com/login",
            image: "surveyorama.jpg",
            description: "Create and share surveys. Created with Javascript & MySQL/Sequelize."
        },
        {
            title: "Last Minute Planner",
            github: "https://github.com/samurwin/the-last-minute-planner",
            deployed: "https://samurwin.github.io/the-last-minute-planner/",
            image: "last-minute.jpg",
            description: "Search for events near you. Created with Javascript & third party APIs."
        },
        {
            title: "Weather Dashboard",
            github: "https://github.com/samurwin/weather-dashboard",
            deployed: "https://samurwin.github.io/weather-dashboard/",
            image: "weather-dash.jpg",
            description: "Find the current, and 5 day forcast. Created with Javascript & third party APIs."
        },
        {
            title: "Savoury Subscriptions",
            github: "https://github.com/ScalexanderB/Savoury-Subscriptions",
            deployed: "https://savoury-subscriptions.herokuapp.com/",
            image: "savoury-sub.jpg",
            description: "A meal kit subscription service website. Created with React, MongoDB/Mongoose, & GraphQL."
        }
    ]

    return (
        <div className='my-4'>
            <h1 className='text-primary text-center mb-2'>Portfolio</h1>
            <section className='flex-row justify-center'>
                {projects.map(project => (
                    <Project key={project.title} project={project} />
                ))}
            </section>
        </div>
    );
};

export default Portfolio;