import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    const [selected, setSelected] = useState('home');

    return (
        <nav className="flex-column align-center gapMd">
            <div id="home" className={`navItem ${selected === 'home' ? "activePage" : ""}`}>
            <Link 
            to='/'
            onClick={() => setSelected('home') }
            >
                Home
            </Link>
            </div>

            <div id="portfolio" className={`navItem ${selected === 'portfolio' ? "activePage" : ""}`}>
            <Link 
            to='/portfolio'
            onClick={() => setSelected('portfolio')}
            >
                Portfolio
            </Link>
            </div>

            <div id="contact" className={`navItem ${selected === 'contact' ? "activePage" : ""}`}>
            <Link 
            to='/contact'
            onClick={() => setSelected('contact')}
            >
                Contact
            </Link>
            </div>
        </nav>
    )
};

export default Nav;