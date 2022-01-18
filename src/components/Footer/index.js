import React from 'react';

function Footer() {
    return (
        <footer className='flex-row justify-center px-3'>
            <img 
            src={require('../../assets/icons/github.png')} 
            alt='github icon'
            className='p-3' 
            />

            <img 
            src={require('../../assets/icons/linkedIn.png')} 
            alt='linkedin icon' 
            className='p-3'
            />

            <img 
            src={require('../../assets/icons/insta.png')} 
            alt='instagram icon' 
            className='p-3'
            />
        </footer>
    )
};

export default Footer;