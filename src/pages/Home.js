import React from 'react';
import './home.css';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Helmet>
                <style>{'body { background: var(--secondary); }'}</style>
            </Helmet>
            {/* Hero */}
            <section className='flex-row justify-space-around align-center hero w-100'>
                <div className='col-12 col-md-5 my-5'>
                    <h4 className='text-secondary pb-4 intro'>Hi, I'm Sam!</h4>
                    <p className='title text-primary'>DESIGNER<span className='title text-secondary'>.</span></p>
                    <p className='title text-secondary'>DEVELOPER<span className='title text-primary'>.</span> </p>
                </div>
                <div className='col-12 col-md-5 my-3 img-container'>
                    <img
                    src={require('../assets/images/hero-star.png')} 
                    alt='Samantha Urwin Web/Graphic Designer and Developer'
                    className='hero-img'
                    />
                </div>
            </section>

            {/* Page Content */}
            <section>
                <div className='section-spacing'>
                    <h1 className='blurb milgran text-quatrinary text-center p-5'>A <span className='text-primary'>DESIGNER</span> WITH A CREATIVE HEART 
                    <br/> AND A STRATEGIC MIND.</h1>
                </div>

                {/* Skills */}
                <div className='flex-row align-center justify-space-around section-spacing mx-5'>
                    <div className='skill-card col-10 col-md-5 col-lg-3'>
                        <h4 className='milgran text-primary'>BRAND DESIGN</h4>
                        <p className='text-dark pt-1 px-3'>I create eye-catching, unique designs to bring your brand to life and stand out from the rest!</p>
                    </div>
                    <div className='skill-card col-10 col-md-5 col-lg-3'>
                        <h4 className='milgran text-tertiary'>WEB DESIGN</h4>
                        <p className='text-dark pt-1 px-3'>I design accessible, responsive websites that will greatly enhance your brand’s online presence.</p>
                    </div>
                    <div className='skill-card col-10 col-md-5 col-lg-3'>
                        <h4 className='milgran text-quatrinary'>DEVELOPMENT</h4>
                        <p className='text-dark pt-1 px-3'>I develop seamless, full-stack applications with a focus on front-end development.</p>
                    </div>
                </div>

                {/* Featured Projects */}
                <div className='section-spacing'>
                    <h1 className='milgran text-quatrinary text-center mx-3'>FEATURED PROJECTS</h1>
                    <div className='flex-row align-center justify-space-around mt-5'>
                        <Link to='/trustme' className='col-8 col-lg-4'>
                            <img 
                            src={require('../assets/images/TM-project-img.jpg')}
                            alt='Trust Me Branding Project'
                            className='featured-img col-8 col-lg-3'
                            />
                        </Link>

                        <Link to='/savourysubscriptions' className='col-8 col-lg-4'>
                            <img
                            src={require('../assets/images/SS-project-img.jpg')}
                            alt='Savoury Subscriptions Full Stack Development Project'
                            className='featured-img'
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;