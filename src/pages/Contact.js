import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './contact.css'

import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Contact( socialLinks ) {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    function formChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (isValid) {
                setErrorMessage('');
            } else {
                setErrorMessage('Please enter a valid email!');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
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
                    Let's 
                    <br/>
                    Connect!
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
                <form className='flex-column gapMd'>
                    <h2 className="formTitle w-100 text-secondary">Contact Me</h2>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor='name'>Name:</label>
                        <input name='name' placeholder='Name' onBlur={formChange} />
                    </div>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor="email">Email:</label>
                        <input name='email' placeholder='Email' onBlur={formChange} />
                    </div>
                    <div className='flex-column w-100'>
                        <label className='hide' htmlFor="message">Message</label>
                        <textarea name='message' placeholder='Message...' onBlur={formChange} ></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='text-error'>{errorMessage}</p>
                        </div>
                    )}
                    <div>
                        <button type='submit' className='btnSecondary' onClick={handleSubmit}>Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;