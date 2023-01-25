import React from 'react'
import { Link } from 'react-router-dom'

import ProjectHeading from '../components/ProjectHeading'
import TechSquare from '../components/TechSquare';

function Project({projectInfo}) {
    
    return (
        <div className="wrapper">
            <ProjectHeading 
            title={projectInfo.title}
            subtitle={projectInfo.subtitle}
            tags={projectInfo.tags}
            image={projectInfo.bannerImg}
            overview={projectInfo.overview}
            link={projectInfo.link}
            />

            <section className="container sectionSpacing max800">
                {projectInfo.images.map((image) => (
                    <img
                    src={image.img}
                    alt={image.alt}
                    key={image.alt}
                    className="slideImg my-2"
                    />
                ))}
            </section>

            <section className="container sectionSpacing max800">
                <div className="card">
                    <div className='w-100 mb-3'>
                        <h4 className="cardTitle">Technologies Used</h4>
                        <div className="line"></div>
                    </div>

                    <div className="w-100 flex-row align-center justify-center gapMd">
                        {projectInfo.technologies.map((tech) => (
                            <TechSquare
                            key={tech.id}
                            tech={{
                                id: tech.id,
                                name: tech.name,
                                icon: tech.icon
                            }}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-100 mt-5">
                    <Link to='/portfolio' className='text-center text-tertiary'>View all Projects</Link>
                </div>
            </section>
        </div>
    )
}

export default Project;