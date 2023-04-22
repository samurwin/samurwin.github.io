import React from 'react';

import './projects.css';
import ProjectHeading from '../components/ProjectHeading';
import TechSquare from '../components/TechSquare';
import Button from '../components/Button';
import { rwi } from '../assets/projectInfo';

function Rwi() {

    return(
        <div className="wrapper">
            <ProjectHeading title={rwi.title} subtitle={rwi.subtitle} tags={rwi.tags} image={rwi.bannerImg} overview={rwi.overview} link={rwi.link} />

            {/* Brand Design */}
            <section className="container sectionSpacing max800">
                <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/01 </span>Brand Design</h2>
                <div className="mt-5">
                    <div className="backgroundWhite rwiLogoCon">
                        <img
                            src={rwi.images.logos[0].img}
                            alt={rwi.images.logos[0].alt}
                            className="logoPng"
                        />
                    </div>
                    <p className="caption">{rwi.images.logos[0].alt}</p>
                </div>

                <div className="mt-5">
                    <div className="backgroundBlue rwiLogoCon">
                        <img
                            src={rwi.images.logos[1].img}
                            alt={rwi.images.logos[1].alt}
                            className="logoPng"
                        />
                    </div>
                    <p className="caption">{rwi.images.logos[1].alt}</p>
                </div>

                <div className="mt-5">
                    <div>
                        <img
                            src={rwi.images.logos[2].img}
                            alt={rwi.images.logos[2].alt}
                            className="slideImg"
                        />
                    </div>
                    <p className="caption">{rwi.images.logos[2].alt}</p>
                </div>
            </section>

            <section className="container sectionSpacing max800">
                <h2 className="text-light text-center subheading mb-3"> <span className="text-primary mr-1">/02 </span>Web Design</h2>

                <div>
                    {rwi.images.webDesign.map((image) => (
                        <img
                        key={image.alt}
                        src={image.img}
                        alt={image.alt}
                        className="slideImg my-2"
                        />
                    ))}

                    <p className="text-secondary text-center my-3">View the RWI design system <a href="https://drive.google.com/file/d/1SKWZzwMbseL2MoYwXu4NvTSGCm0swc2q/view?usp=sharing" rel="noreferrer" target="_blank" className="text-tertiary">here</a></p>
                </div>

                <div>
                    <p></p>
                    {rwi.images.illustrations.map((image) => (
                        <img
                        key={image.alt}
                        src={image.img}
                        alt={image.alt}
                        className="slideImg my-2"
                        />
                    ))}
                </div>
            </section>

            <section className="container sectionSpacing max800">
                <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/03 </span>Web Development</h2>
                <div className="card mt-4">
                    <div className='w-100 mb-3'>
                        <h4 className="cardTitle">Technologies Used</h4>
                        <div className="line"></div>
                    </div>
                    <div className="w-100 flex-row align-center justify-center gapLg">
                        {rwi.technologies.map((tech) => (
                                <TechSquare 
                                key={tech.id}
                                tech={{
                                    id: tech.id,
                                    name: tech.name,
                                    icon: tech.icon
                                }} />
                        ))}
                    </div>
                </div>
                <div className="flex-column align-center mt-4">
                    <p className="text-secondary mb-2">Visit the website here:</p>
                    <Button color='primary' text='Website' link='https://rwilabs.io'/>
                </div>
            </section>

        </div>
    )
}

export default Rwi;