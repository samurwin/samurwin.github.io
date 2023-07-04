import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { socialLinksAll } from '../../assets/projectInfo'

import logo from '../../assets/images/SMU-logo.svg';
import Socials from '../Socials';


function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [selected, setSelected] = useState('home');

    const history = useHistory()
    useEffect(() => {
        history.listen((location) => {
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
                <Socials socialLinks={socialLinksAll} />
            </div>
        </header>
    );
};

export default Header;