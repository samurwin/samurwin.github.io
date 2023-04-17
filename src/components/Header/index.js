import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaBehance, FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

import logo from '../../assets/images/SMU-logo.svg';

function Header({socialLinks}) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [selected, setSelected] = useState('home');

    const history = useHistory()
    useEffect(() => {
        history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
            const path = location.pathname;

            if(path.includes('portfolio')) {
                setSelected('portfolio');
            } else if (path.includes('contact')) {
                setSelected('contact');
            } else {
                setSelected('home');
            }
        })
    }, [history])

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    function onClick(link) {
        window.open(link, '_blank');
    }

    return (
        <header className='sidebar flex-column justify-space-between align-center'>
            <div className="flex-column align-center gapMd">
                <div className='logo'>
                    <Link to='/'>
                        <img 
                        src={logo} 
                        alt='SMU logo' 
                        className= 'w-100'
                        />
                    </Link>
                </div>

                <button 
                type="button" 
                className="menu"
                onClick={() => handleToggle()}
                >
                    <HiMenu/>
                </button>
            </div>

            <nav className={`navbar ${navbarOpen ? "navbarOpen" : ""}`}>
                <div id="home" className={`navItem ${selected === 'home' ? "activePage" : ""}`}>
                    <Link 
                    to='/'
                    onClick={() => {
                        setSelected('home');
                        setNavbarOpen(false);
                    }}
                    >
                        Home
                    </Link>
                </div>

                <div id="portfolio" className={`navItem ${selected === 'portfolio' ? "activePage" : ""}`}>
                    <Link 
                    to='/portfolio'
                    onClick={() => {
                        setSelected('portfolio');
                        setNavbarOpen(false);
                    }}
                    >
                        Portfolio
                    </Link>
                </div>

                <div id="contact" className={`navItem ${selected === 'contact' ? "activePage" : ""}`}>
                    <Link 
                    to='/contact'
                    onClick={() => {
                        setSelected('contact');
                        setNavbarOpen(false);
                    }}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
            
            {/* Social Links */}
            <div className="flex-column align-center">
                <span 
                className="svg text-secondary pb-3"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(socialLinks.linkedinURL)
                }}
                >
                    <FaLinkedinIn/>
                </span>

                <span 
                className="svg text-secondary pb-3"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(socialLinks.githubURL)
                }}
                >
                    <FaGithub/>
                </span>

                <span 
                className="svg text-secondary pb-3"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(socialLinks.behanceURL)
                }}
                >
                    <FaBehance/>
                </span>

                <span 
                className="svg text-secondary"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(socialLinks.dribbbleURL)
                }}
                >
                    <FaDribbble />
                </span>
            </div>
        </header>
    );
};

export default Header;