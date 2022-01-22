import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='col-12 col-lg-5 pt-3 flex-row justify-center justify-flex-end-lg text-secondary'>
            <Link to='/'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    )
};

export default Nav;