import React from 'react';
import Project from '../Project';

function SmProjectGallery({ designProjects, developmentProjects }) {
    return (
        <>
            <div className='flex-row align-center justify-center'>
                <button type='button' className='milgran galleryBtn selected'>DESIGN</button>
                <span className='milgran divider px-2'> / </span>
                <button type='button' className= 'milgran galleryBtn'>DEVELOPMENT</button>
            </div>
            <div className='px-5'>
                {designProjects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </>
    )
}

export default SmProjectGallery;