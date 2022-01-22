import React from 'react';

function Contact() {
    return (
        <section className='w-100 my-4 flex-column align-center align-start-lg'>
            <h1 className='text-primary mb-2'>Contact Me</h1>
            <form className='flex-column align-center align-start-lg card my-2 w-75'>
                <div className='my-2 flex-column w-100'>
                    <label className='mb-1 text-uppercase text-dark' for='name'>Name:</label>
                    <input name='name' placeholder='Enter your name...' />
                </div>
                <div className='my-2 flex-column w-100'>
                    <label className='mb-1 text-uppercase text-dark' for='email'>Email:</label>
                    <input name='email' placeholder='Enter your email...' />
                </div>
                <div className='my-2 w-100'>
                    <textarea name='message' placeholder='Enter your message...'></textarea>
                </div>
                <button className='w-100 btn mt-2'>Send</button>
            </form>
        </section>
    );
};

export default Contact;