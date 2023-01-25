import React from 'react';

import './style.css';

export default function ProjectHeading( { title, subtitle, tags, image, overview, link } ) {

    return (
        <section className="container sectionSpacing max1000">
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

            {title === 'RWI Labs' ? (
                <div 
                className="projectImage mt-5"

                style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                }}
            ></div> 
            ) : (
                <div 
                className="projectImage mt-5"

                style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                }}
            ></div>
            )}

            <div className="overviewTxt mt-5">
                <p>{ overview }</p>

                {link 
                ? <a  className="deployedLink mt-3" href={link.url}>{link.linkTitle}</a>
                : <></>
                }
            </div>
        </section>
    )
}