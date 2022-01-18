import React from 'react';

function About() {
    return (
        <div className='my-3'>
            <section className='flex-row justify-space-around align-center'>
                <div className='col-12 col-lg-7'>
                    <h1 className='text-primary'>Hi I'm Sam!</h1>
                    <h4 className='text-quatrinary'>Full Stack Developer & Graphic Designer</h4>
                </div>
                <div className='col-12 col-lg-5'>
                    <img 
                    src={require('../assets/images/website-heroimg.png')} 
                    alt='Samantha Urwin at a desk' 
                    className='hero-img'
                    />
                </div>
            </section>
            <section className='my-3 p-4 about-blurb'>
                <h2 className='text-center text-quatrinary'>About Me</h2>
                <p className='text-dark my-2'>
                I would describe myself as a dualistic person. Creativity comes easily to me and so does logic and organization. 
                I am a great collaborator, and self-motivator. I think objectively and outside the box.
                </p>
                <p className='text-dark my-2'>
                I am continuing to learn and grow as a designer working as a freelance artist as well as attending the University of Toronto SCS Coding Bootcamp. 
                I am excited to expand my skillset in web design and development while I continue my journey as a graphic designer.
                </p>
            </section>
        </div>
    )
};

export default About;