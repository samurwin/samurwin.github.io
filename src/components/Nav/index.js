import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='col-3 col-md-6 p-4 flex-row justify-flex-end text-primary'>
            <button type='button' className='hamburger pr-3 pb-3'><svg id="a" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><line x1="2" y1="5" x2="22" y2="5" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/><line x1="2" y1="12" x2="22" y2="12" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/><line x1="2" y1="19" x2="22" y2="19" fill="none" stroke="#f05d5e" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.82"/></svg></button>
            <div className='navbar flex-row align-center'>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>About</Link>
            </div>
        </nav>
    )
};

export default Nav;