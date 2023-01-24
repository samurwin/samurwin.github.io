import React from 'react'

import ProjectHeading from '../components/ProjectHeading'

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

                <div className="w-100 mt-5">
                    <a href='/portfolio' className='text-center text-tertiary'>View all Projects</a>
                </div>
            </section>
        </div>
    )
}

export default Project;