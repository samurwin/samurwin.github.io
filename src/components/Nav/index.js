import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='col-12 col-lg-6 pt-3 flex-row justify-center justify-flex-end-lg text-primary'>
            <Link to='/'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    )
};

export default Nav;