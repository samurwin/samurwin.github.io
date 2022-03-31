import React from 'react';
import './style.css';

function ProjectPage({ projectInfo }) {
    return (
        <div>
            <section className='container project-header flex-column justify-center align-center'>
                <h1 className='milgran text-quatrinary text-uppercase page-title'>{projectInfo.title}</h1>
                <h4 className='text-uppercase text-dark text-center'>{projectInfo.category}</h4>
                <img
                src={require(`../../assets/images/projects/${projectInfo.mainImg}`)}
                alt={projectInfo.title}
                className='pt-4 project-img'
                />
            </section>
            <section className='container flex-column align-center project-body'>
                <p className='mb-5 text-dark description'>{projectInfo.description}</p>
                {projectInfo.github ? 
                    <div className='projLinks'>
                        <a href={projectInfo.github}>GitHub Respository</a>
                        <a href={projectInfo.deployed}>View Website</a>
                    </div>
                    :
                    <></>
                }
                {projectInfo.imgs ? 
                    projectInfo.imgs.map((img) => (
                        <img
                        src={require(`../../assets/images/projects/${img}`)}
                        alt={img}
                        key={img}
                        className='project-img mb-5'
                        />
                    ))
                    :
                    <></>
                }
            </section>
        </div>
    )
}

export default ProjectPage;