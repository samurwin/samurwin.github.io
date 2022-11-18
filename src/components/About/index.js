import React from 'react';
import "./style.css"

import aboutImg from "../../assets/images/samantha-urwin-ui-designer-web-developer.png";

export default function About () {

    return (
        <section className="aboutCon">
            <div className="container">
                <div className="aboutImg">
                    <img
                    src={aboutImg}
                    alt="Samantha Urwin Web Developer and UI Designer"
                    />
                </div>
                <h2 className="aboutHeading text-primary">A designer with a creative heart and a strategic mind.</h2>
                <div>
                    <p className="mb-3">
                        Nulla porttitor accumsan tincidunt. Proin eget tortor risus. 
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                    </p>
                    <p className="mb-3">
                        Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia Curae; Donec velit neque, auctor 
                        sit amet aliquam vel, ullamcorper sit amet ligula. Nulla 
                        porttitor accumsan tincidunt. Nulla quis lorem ut libero 
                        malesuada feugiat.
                    </p>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Vestibulum 
                        ante ipsum primis in faucibus orci luctus et ultrices posuere 
                        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, 
                        ullamcorper sit amet ligula. Curabitur aliquet quam id dui 
                        posuere blandit.
                    </p>
                </div>
            </div>
        </section>
    )
}