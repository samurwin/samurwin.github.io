import React from 'react';
import "./style.css"

import aboutImg from "../../assets/images/samantha-urwin-ui-designer-web-developer.png";

export default function About () {

    return (
        <section className="aboutWrapper sectionSpacing">
            <div className="container aboutCon max1000">
                <div className="aboutImg">
                    <img
                    src={aboutImg}
                    alt="Samantha Urwin Web Developer and UI Designer"
                    />
                </div>
                <div className="aboutTxt">
                    <h2 className="text-primary">A designer with a creative heart and a strategic mind.</h2>
                    <p className="mb-3">
                        Hi there! I’m Sam, a web designer and developer from the Greater Toronto Area.
                    </p>
                    <p className="mb-3">
                        I began my journey as a graphic designer working with a variety of brands, 
                        and creating designs for both print and the web. While working as a graphic designer, 
                        I gained a particular interest in designing content for the digital world and sought to 
                        help bring brands to life online. It was then that I shifted my focus to the web – and 
                        specifically to creating websites.
                    </p>
                    <p>
                        Now, focusing on front-end development I have been able to utilize my skills in design 
                        to create beautiful, responsive websites taking special consideration to accessible design 
                        and user experience.
                    </p>
                </div>
            </div>
        </section>
    )
}