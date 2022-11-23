import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
// import Swiper styles
import 'swiper/css';
import "./style.css";

import rwiThumbnail from "../../assets/images/RWI-Labs-thumbnail.jpg";
import Link from "../Link";

export default function CaseStudies() {

    return (
        <section className="caseStudies sectionSpacing">
            <h1 className="text-secondary text-center">Case Studies</h1>

                <Swiper
                    slidesPerView={1.4}
                    spaceBetween={0}
                    breakpoints={{
                        500:{
                            spaceBetween: 40
                        },

                        640:{
                            spaceBetween: 56
                        },

                        768:{
                            spaceBetween: 72
                        },

                        992:{
                            spaceBetween: 80,
                            slidesPerView: 2
                        }
                        
                    }}
                >
                    <SwiperSlide>
                        <img
                            src={rwiThumbnail}
                            alt="RWI Labs Digital Marketing Agency Project"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={rwiThumbnail}
                            alt="RWI Labs Digital Marketing Agency Project"
                        />
                    </SwiperSlide>
                </Swiper>

            <Link color="primary" text="View Portfolio" link="/portfolio"/>
        </section>
    )
}