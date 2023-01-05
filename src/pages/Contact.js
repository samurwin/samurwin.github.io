import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './contact.css'

import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md'

function Contact( socialLinks ) {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    function formChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);

            if (isValid) {
                setErrorMessage('');
                console.log('valid')
            } else {
                setErrorMessage(' Please enter a valid email!');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(` ${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    function onClick(link) {
        window.open(link, '_blank');
    }

    return (
        <div className="wrapper">
            <section className="container sectionSpacing flex-column align-center">
                <h1 className="text-primary text-uppercase milgran pb-4 text-center">
                    Let's Connect!
                </h1>

                <div className="flex-row gapLg align-center">
                    <span 
                    className="svgLg text-secondary"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(socialLinks.linkedinURL)
                    }}
                    >
                        <FaLinkedinIn/>
                    </span>
                    <span 
                    className="svgLg text-secondary"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(socialLinks.githubURL)
                    }}
                    >
                        <FaGithub/>
                    </span>
                    <span 
                    className="svgLg text-secondary"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(socialLinks.behanceURL)
                    }}
                    >
                        <FaBehance/>
                    </span>
                </div>
            </section>
            <section className='container sectionSpacing'>
                <form action="https://formsubmit.co/urwinsamantha@gmail.com" method="POST" className='flex-column gapMd mx-auto'>
                    <h2 className="formTitle w-100 text-secondary">Contact Me</h2>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor='Name'>Name:</label>
                        <input name='Name' placeholder='Name' onBlur={formChange} />
                    </div>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor="Email">Email:</label>
                        <input name='Email' placeholder='Email' onBlur={formChange} />
                    </div>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor="Message">Message</label>
                        <textarea name='Message' placeholder='Message...' onBlur={formChange} ></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='text-error'>
                                <MdOutlineErrorOutline />
                                {errorMessage}
                            </p>
                        </div>
                    )}
                    <div>
                        <button type='submit' className='btn'>Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;