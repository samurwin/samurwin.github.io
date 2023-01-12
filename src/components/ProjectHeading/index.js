import React from 'react';

import './style.css';

export default function ProjectHeading( { title, subtitle, tags, image } ) {

    return (
        <section className="container sectionSpacing">
            <h1 className="milgran text-primary text-uppercase text-center">{ title }</h1>
            <h4 className="text-secondary text-center weight500">{ subtitle }</h4>
            
            <div className="flex-row align-center justify-center gapMd my-3">
                {tags.map((tag) => {
                    if(tag === "Web Design") {
                        return (
                            <div key={tag} className="projectTag primaryTag">
                                Web Design
                            </div>
                        )
                    }

                    if(tag === "Brand Design") {
                        return (
                            <div key={tag} className="projectTag orangeTag">
                                Brand Design
                            </div>
                        )
                    }

                    if(tag === "Development") {
                        return (
                            <div key={tag} className="projectTag greenTag">
                                Development
                            </div>
                        )
                    }
                }) }
            </div>

            <div 
                className="projectImage mt-5"
                style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                }}
            ></div>
        </section>
    )
}