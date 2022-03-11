import React from 'react';
import './home.css';

function Home() {
    return (
        <div>
            <section className='flex-row justify-space-around align-center hero w-100'>
                <div className='col-12 col-lg-5 my-3'>
                    <h4 className='text-secondary pb-4 pr-4 text-right'>Hi, I'm Sam!</h4>
                    <p className='title text-primary'>DESIGNER<span className='title text-secondary'>.</span></p>
                    <p className='title text-secondary'>DEVELOPER<span className='title text-primary'>.</span> </p>
                </div>
                <div className='col-12 col-lg-5 my-2'>
                    <img
                    src={require('../assets/images/hero-star.png')} 
                    alt='Samantha Urwin Web/Graphic Designer and Developer'
                    className='hero-img'
                    />
                </div>
            </section>
        </div>
    )
}

export default Home;