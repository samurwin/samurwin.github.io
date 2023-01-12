import React from 'react';

import './rwi.css';
import '../components/ProjectHeading';
import ProjectHeading from '../components/ProjectHeading';

const rwi = {
    title: "RWI Labs",
    subtitle: "Digital Agency",
    tags: [
        "Web Design",
        "Development",
        "Brand Design",
    ],
    image: "/RWI-Labs-thumbnail.jpg"
  }

function Rwi() {

    return(
        <div className="wrapper">
            <ProjectHeading title={rwi.title} subtitle={rwi.subtitle} tags={rwi.tags} image={rwi.image} />
        </div>
    )
}

export default Rwi;