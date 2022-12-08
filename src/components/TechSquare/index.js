import React from 'react'

import './style.css'

export default function TechSquare({ tech }) {

    return(
        <div className="flex-column align-center">
            <button className="iconCon fit-content">
                    {tech.icon}
            </button>

            <p className="techName text-secondary text-center">
                {tech.name}
            </p>
        </div>
    )
}