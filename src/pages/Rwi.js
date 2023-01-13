import React from 'react';

import './rwi.css';
import ProjectHeading from '../components/ProjectHeading';

import primaryLogo from '../assets/images/rwi/RWI-Logo_Colour-Small.png';
import secondaryLogo from '../assets/images/rwi/RWI-Wordmark_Partial-Colour-Small.png';
import colourCombinations from '../assets/images/rwi/RWI_Logo-colour-combinations.png';

const rwi = {
    title: "RWI Labs",
    subtitle: "Digital Agency",
    tags: [
        "Web Design",
        "Development",
        "Brand Design",
    ],
    image: "/RWI-Labs-thumbnail.jpg",
    overview: "Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    link:  {
        url: "https://rwilabs.io",
        linkTitle: "RwiLabs.io"
    }
  }

function Rwi() {

    return(
        <div className="wrapper">
            <ProjectHeading title={rwi.title} subtitle={rwi.subtitle} tags={rwi.tags} image={rwi.image} overview={rwi.overview} link={rwi.link} />

            {/* Brand Design */}
            <section className="container sectionSpacing max1000">
                <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/01 </span>Brand Design</h2>
                <div className="mt-5">
                    <div className="backgroundWhite rwiLogoCon">
                        <img
                            src={primaryLogo}
                            alt="RWI Labs primary logo design"
                            className="logoPng"
                        />
                    </div>
                    <p className="caption">RWI Labs Primary Logo Design</p>
                </div>

                <div className="mt-5">
                    <div className="backgroundBlue rwiLogoCon">
                        <img
                            src={secondaryLogo}
                            alt="RWI Labs secondary logo design"
                            className="logoPng"
                        />
                    </div>
                    <p className="caption">RWI Labs Secondary Logo Design</p>
                </div>

                <div className="mt-5">
                    <div>
                        <img
                            src={colourCombinations}
                            alt="RWI Labs logo colour combinations"
                            className="slideImg"
                        />
                    </div>
                    <p className="caption">RWI Labs Logo Colour Combinations</p>
                </div>

                <div className="mt-5 flex-row justify-space-between flexWrap">
                    <div>
                        <h3 className="text-secondary">Typography</h3>
                        <div>
                            <h4 className="text-light mt-4">Gilmer Heavy</h4>
                            <p className="text-light mt-2">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br/>
                                abcdefghijklmnopqrstuvwxyz
                                <br/>
                                1234567890
                            </p>
                        </div>
                        <div>
                            <h4 className="text-light mt-4">Rockwell</h4>
                            <p className="text-light mt-2">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br/>
                                abcdefghijklmnopqrstuvwxyz
                                <br/>
                                1234567890
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-secondary">Colour</h3>
                        <h4 className="text-light my-4">Main Brand Colours</h4>
                        <div className="flex-row gapMd">
                            <div>
                                <div className="backgroundBlue colourSquare"></div>
                                <span className="text-light italic mt-2">#02033C</span>
                            </div>
                            <div>
                                <div className="backgroundRed colourSquare"></div>
                                <span className="text-light italic mt-2">#CC2C12</span>
                            </div>
                            <div>
                                <div className="backgroundWhite colourSquare"></div>
                                <span className="text-light italic mt-2">#F3F5F7</span>
                            </div>
                            <div>
                                <div className="backgroundBlack colourSquare"></div>
                                <span className="text-light italic mt-2">#1A1A1A</span>
                            </div>
                        </div>
                        <h4 className="text-secondary my-4">Secondary Brand Colours</h4>
                        <div className="flex-row gapMd">
                            <div>
                                <div className="bgSecondaryOne colourSquare"></div>
                                <span className="text-light italic mt-2">#5C5C99</span>
                            </div>
                            <div>
                                <div className="bgSecondaryTwo colourSquare"></div>
                                <span className="text-light italic mt-2">#E6E9F4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container sectionSpacing max1000">
                <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/02 </span>Web Design</h2>

            </section>

            <section className="container sectionSpacing max1000">
                <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/03 </span>Web Development</h2>
                
            </section>

        </div>
    )
}

export default Rwi;