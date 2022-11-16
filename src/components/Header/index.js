import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Nav from '../Nav';
import logo from '../../assets/images/SMU-logo.svg';


function Header() {

    const githubURL = 'https://github.com/samurwin';
    const instaURL = 'https://www.instagram.com/surwindesign/';
    const linkedinURL = 'https://www.linkedin.com/in/samanthaurwin/';
    const behanceURL = 'https://www.behance.net/samanthaurwin';

    function onClick(link) {
        window.open(link, '_blank');
    }

    return (
        <header className='sidebar flex-column justify-space-between'>
            <div className='p-4'>
                <Link to='/'>
                    <img 
                    src={logo} 
                    alt='SMU logo' 
                    className= 'logo'
                    />
                </Link>
            </div>
            <Nav />
            <div className="flex-column align-center">
                <span 
                className="svg text-secondary pb-3"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(linkedinURL)
                }}
                >
                    <FaLinkedinIn/>
                </span>

                <span 
                className="svg text-secondary pb-3"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(githubURL)
                }}
                >
                    <FaGithub/>
                </span>

                <span 
                className="svg text-secondary"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(behanceURL)
                }}
                >
                    <FaBehance/>
                </span>
            </div>
        </header>
    );
};

export default Header;