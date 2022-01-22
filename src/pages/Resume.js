import React from 'react';

function Resume() {
    return (
        <section className='w-100 my-4 flex-row justify-center'>
            <div className='col-12 col-md-10 flex-row justify-space-between'>
                <h1 className='text-primary'>Resume</h1>
                <button className='btn m-2'>Download Resume</button>
            </div>

            <div className='m-2 card col-12 col-md-10 flex-column align-center'>
                <h4 className='text-quatrinary mb-2'>Education</h4>
                <ul className='pl-5'>
                    <li>Full Stack Coding Bootcamp - University of Toronto</li>
                    <li>Advertising & Graphic Design - Humber College</li>
                </ul>
            </div>

            <div className='m-2 card col-12 col-md-5'>
                <h4 className='text-quatrinary mb-2 text-center'>Technologies</h4>
                <ul className='pl-5'>
                    <li>React</li>
                    <li>MongoDB, Mongoose</li>
                    <li>MySQL, Sequalize</li>
                    <li>Express</li>
                    <li>Javascript</li>
                    <li>HTML/CSS</li>
                    <li>Adobe Creative Cloud</li>
                </ul>
            </div>

            <div className='m-2 card col-12 col-md-5'>
                <h4 className='text-quatrinary mb-2 text-center'>Skills</h4>
                <ul className='pl-5'>
                    <li>Web Design</li>
                    <li>Full Stack Web Development</li>
                    <li>Accessible Design</li>
                    <li>Responsive Design</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL APIs</li>
                </ul>
            </div>

        </section>
    );
};

export default Resume;