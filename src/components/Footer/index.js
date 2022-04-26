import React from 'react';

function Footer() {
    const github = 'https://github.com/samurwin';
    const insta = 'https://www.instagram.com/surwindesign/';
    const linkedIn = 'https://www.linkedin.com/in/samanthaurwin/';
    const behance = 'https://www.behance.net/samanthaurwin';

    function onClick(link) {
        window.open(link, '_blank');
    }

    return (
        <footer className='flex-row justify-center px-5'>

            <img 
            src={require('../../assets/icons/github.png')} 
            alt='github icon'
            className='icon'
            onClick={(e) => {
                e.preventDefault();
                onClick(github)
            }} 
            />

            <img 
            src={require('../../assets/icons/linkedIn.png')} 
            alt='linkedin icon' 
            className='icon'
            onClick={(e) => {
                e.preventDefault();
                onClick(linkedIn)
            }} 
            />

            <img 
            src={require('../../assets/icons/insta.png')} 
            alt='instagram icon' 
            className='icon'
            onClick={(e) => {
                e.preventDefault();
                onClick(insta)
            }} 
            />
            <img
            src={require('../../assets/icons/behance.png')}
            alt='behance icon'
            className='icon'
            onClick={(e) => {
                e.preventDefault();
                onClick(behance)
            }}
            />

        </footer>
    )
};

export default Footer;