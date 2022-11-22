import React from 'react';
import "./style.css";

import rwiThumbnail from "../../assets/images/RWI-Labs-thumbnail.jpg";
import Link from "../Link";

export default function CaseStudies() {

    return (
        <section className="container">
            <h1 className="text-secondary text-center">Case Studies</h1>

            <div className="slider">
                <div className="thumbnail">
                    <img
                    src={rwiThumbnail}
                    alt="RWI Labs Digital Marketing Agency Project"
                    />
                </div>
                <div className="thumbnail">
                    <img
                    src={rwiThumbnail}
                    alt="RWI Labs Digital Marketing Agency Project"
                    />
                </div>
            </div>

            <Link color="primary" text="View Portfolio" link="/portfolio"/>
        </section>
    )
}