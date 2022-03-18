import React from 'react';
import './home.css';

function Home() {
    return (
        <div>
            {/* Hero */}
            <section className='flex-row justify-space-around align-center hero w-100'>
                <div className='col-12 col-md-5 my-5'>
                    <h4 className='text-secondary pb-4 pr-4 intro'>Hi, I'm Sam!</h4>
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
                    <h1 className='milgran text-quatrinary text-center p-5'>A <span className='text-primary'>DESIGNER</span> WITH A CREATIVE HEART 
                    <br/> AND A STRATEGIC MIND.</h1>
                </div>

                {/* Skills */}
                <div className='flex-row align-center justify-space-around section-spacing'>
                    <div className='skill-card col-8 col-md-5 col-lg-3'>
                        <h4 className='milgran text-dark'>BRAND DESIGN</h4>
                        <p className='text-dark'>I design...</p>
                    </div>
                    <div className='skill-card col-8 col-md-5 col-lg-3'>
                        <h4 className='milgran text-dark'>WEB DESIGN</h4>
                        <p className='text-dark'>I design...</p>
                    </div>
                    <div className='skill-card col-8 col-md-5 col-lg-3'>
                        <h4 className='milgran text-dark'>DEVELOPMENT</h4>
                        <p className='text-dark'>I design...</p>
                    </div>
                </div>

                {/* Featured Projects */}
                <div className='section-spacing'>
                    <h1 className='milgran text-quatrinary text-center'>FEATURED PROJECTS</h1>
                    <div className='flex-row align-center justify-space-around mt-5'>
                        <img 
                        src={require('../assets/images/dev-diaries.jpg')}
                        alt='dev diaries project'
                        className='featured-img col-8 col-lg-5'
                        />
                        <img
                        src={require('../assets/images/weather-dash.jpg')}
                        alt='weather dashboard project'
                        className='featured-img col-8 col-lg-5'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;