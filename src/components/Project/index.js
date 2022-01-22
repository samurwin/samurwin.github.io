import React from 'react';

function Project({ project }) {

    return (
        <div className='col-12 col-lg-5 m-2 card flex-column align-center'>
            <h4 
            className='text-quatrinary mb-1'
            onClick={(e) => {
                e.preventDefault();
                window.open(project.deployed, '_blank');
            }}
            >
            {project.title}
            </h4>
            <a href={project.github}>Github</a>
            <img className='project-img my-2' src={require(`../../assets/images/${project.image}`)} alt={project.title} />
            <p className='text-dark text-center'>{project.description}</p>
        </div>
    );
};

export default Project;