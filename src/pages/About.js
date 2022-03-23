import React from 'react';
import './about.css';

function About() {
    return (
        <div>
            {/* ABOUT ME */}
            <section className='slanted-left'>
                <div className='container flex-row justify-space-around align-center'>
                    <div className='col-lg-4 pr-5'>
                        <img 
                            src={require('../assets/images/about-me.jpg')} 
                            alt='Samantha Urwin on the Street' 
                            className='about-img'
                        />
                    </div>

                    <div className='col-lg-8 pl-5'>
                        <h1 className='milgran text-quatrinary'>HI I'M SAM! <span className='desc'>DESIGNER / DEVELOPER - TORONTO, ON</span></h1>
                        <p className='text-dark pt-4'>
                            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
                            convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.
                            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat,
                            accumsan id imperdiet et, porttitor at sem.
                        </p>
                        <br></br>
                        <p className='text-dark'>
                            Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque
                            nec, egestas non nisi. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
                            Pellentesque in ipsum id orci porta dapibus.
                        </p>
                    </div>
                </div>

            </section>

            {/* RESUME */}
            <section className='container dark-div w-100'>
                {/* CONTACT */}
                <div>
                    <h1>CONTACT ME</h1>
                    <div>
                        <h5><span></span> URWINSAMANTHA@GMAIL.COM</h5>
                        <h5><span></span> RESUME</h5>
                    </div>
                </div>

                {/* TECHNOLOGIES LIST */}
                <div>
                    <h1>TECHNOLOGIES</h1>
                    <ul>
                        <li>
                            <span></span>
                            ABOBE CREATIVE CLOUD
                        </li>
                    </ul>
                </div>

                {/* EDUCATION LIST */}
                <div>
                    <h1>EDUCATION</h1>

                </div>
            </section>
        </div>
    )
};

export default About;