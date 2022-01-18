import React from 'react';

function Contact() {
    return (
        <section className='my-3'>
            <h1 className='text-primary'>Contact Me</h1>
            <form className='flex-col align-center align-flex-start-lg contact-form m-2'>
                <div>
                    <label for='name'>Name:</label>
                    <input name='name' placeholder='Enter your name...' />
                </div>
                <div>
                    <label for='email'>Email:</label>
                    <input name='email' placeholder='Enter your email...' />
                </div>
                <div>
                    <textarea row='5' placeholder='Enter your message...'></textarea>
                </div>
            </form>
        </section>
    );
};

export default Contact;