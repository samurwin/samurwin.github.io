import React from 'react';
import Project from '../Project';

function LgProjectGallery({ designProjects, developmentProjects}) {

    return (
        <>
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
        </>
    )
}

export default LgProjectGallery;