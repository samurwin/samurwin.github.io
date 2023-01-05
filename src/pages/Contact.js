import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
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

    return (
        <div className="wrapper">
            <section className="container">
                <h1 className="text-primary milgran">Let's Connect</h1>
            </section>
            <section className='container sectionSpacing'>
                <form className='flex-column align-center align-start-lg card my-2 w-75'>
                    <div className='my-2 flex-column w-100'>
                        <label className='mb-1 text-uppercase text-dark' htmlFor='name'>Name:</label>
                        <input name='name' placeholder='Enter your name...' onBlur={formChange} />
                    </div>
                    <div className='my-2 flex-column w-100'>
                        <label className='mb-1 text-uppercase text-dark' htmlFor='email'>Email:</label>
                        <input name='email' placeholder='Enter your email...' onBlur={formChange} />
                    </div>
                    <div className='my-2 w-100'>
                        <textarea name='message' placeholder='Enter your message...' onBlur={formChange} ></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='text-error'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' className='w-100 btn mt-2' onClick={handleSubmit}>Send</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;