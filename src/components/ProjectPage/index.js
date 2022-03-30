import React from 'react';

function ProjectPage({ projectInfo }) {
    return (
        <div>
            <section>
                <h1>{projectInfo.title}</h1>
                <h2>{projectInfo.category}</h2>
                <img
                src={require(`../../assets/images/projects/${projectInfo.mainImg}`)}
                alt={projectInfo.title}
                />
            </section>
            <section>
                <p>{projectInfo.description}</p>
                {projectInfo.github ? 
                    <div>
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