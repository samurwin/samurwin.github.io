import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <nav className={`text-primary p-4 ${navbarOpen ? " navbarOpen": ""}`}>
            <button type='button' onClick={handleToggle} className='hamburger p-3'><svg id="a" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><line x1="2" y1="5" x2="22" y2="5" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/><line x1="2" y1="12" x2="22" y2="12" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/><line x1="2" y1="19" x2="22" y2="19" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/></svg></button>
            <div className={navbarOpen ? "navbarVisible" : "navbar"}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
            </div>
        </nav>
    )
};

export default Nav;