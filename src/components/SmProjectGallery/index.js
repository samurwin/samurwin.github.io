import React, { useState } from 'react';
import Project from '../Project';

function SmProjectGallery({ designProjects, developmentProjects }) {
    const [gallery, setGallery] = useState(0);

    return (
        <>
            <div className='flex-row align-center justify-center'>
                {gallery ? <>
                    <button 
                    type='button' 
                    className='milgran galleryBtn'
                    onClick={() => setGallery(0)}
                    >DESIGN</button>
    
                    <span className='milgran divider px-2'> / </span>
                    
                    <button 
                    type='button' 
                    className= 'milgran galleryBtn selected'
                    onClick={() => setGallery(1)}
                    >DEVELOPMENT</button>
                </>
                :
                <>
                    <button 
                    type='button' 
                    className='milgran galleryBtn selected'
                    onClick={() => setGallery(0)}
                    >DESIGN</button>
    
                    <span className='milgran divider px-2'> / </span>
                    
                    <button 
                    type='button' 
                    className= 'milgran galleryBtn'
                    onClick={() => setGallery(1)}
                    >DEVELOPMENT</button>
                </>
                }

            </div>
            <div className='px-5'>
                {gallery ? 
                    developmentProjects.map((project) => (
                        <Project key={project.title} project={project} />
                    ))
                : 
                    designProjects.map((project) => (
                        <Project key={project.title} project={project} />
                    ))
                }

            </div>
        </>
    )
}

export default SmProjectGallery;