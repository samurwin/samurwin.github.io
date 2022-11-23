import React from 'react'

import './style.css'

export default function TechSquare({ tech }) {

    return(
        <div className="fit-content">
            <div className="iconCon fit-content">
                    {tech.icon}
            </div>

            <p className="techName text-secondary text-center">
                {tech.name}
            </p>
        </div>
    )
}