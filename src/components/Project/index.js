import React from 'react';

function Project({ project }) {

    return (
        <div className='flex-column align-center pt-5'>
            <img
            src={require(`../../assets/images/${project.image}`)}
            alt={project.title}
            />
            <h5 className='milgran text-uppercase text-secondary text-center pt-2'>{project.title}</h5>
        </div>
    );
};
 
export default Project;