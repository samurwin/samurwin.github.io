import React from 'react'

import './style.css'
import { FaReact, FaShopify, FaNodeJs, FaGitAlt, FaWordpressSimple } from 'react-icons/fa'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { SiTypescript, SiNextdotjs, SiGraphql, SiFigma, SiAdobecreativecloud } from 'react-icons/si'

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