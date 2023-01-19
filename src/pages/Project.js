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

            <section className="container sectionSpacing">
                
            </section>
        </div>
    )
}

export default Project;