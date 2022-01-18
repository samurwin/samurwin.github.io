import React from 'react';

function Resume() {
    return (
        <section>
            <h1 className='text-primary'>Resume</h1>
            <button className='btn m-2'>Download Resume</button>
            <div className='m-2'>
                <h4 className='text-quatrinary'>Skills</h4>
                <ul>
                    <li>Web Design</li>
                    <li>Full Stack Web Development</li>
                </ul>
            </div>
            <div className='m-2'>
                <h4 className='text-quatrinary'>Education</h4>
                <ul>
                    <li>Full Stack Coding Bootcamp - University of Toronto</li>
                    <li>Advertising & Graphic Design - Humber College</li>
                </ul>
            </div>
            <div className='m-2'>
                <h4 className='text-quatrinary'>Technologies</h4>
                <ul>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Express</li>
                    <li>Javascript</li>
                    <li>HTML/CSS</li>
                    <li>Adobe Creative Cloud</li>
                    <li>Figma</li>
                </ul>
            </div>
        </section>
    );
};

export default Resume;