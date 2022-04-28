import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Header() {
    return (
        <header className='flex-row justify-space-between align center'>
            <div className='p-4'>
                <Link to='/'>
                    <img 
                    src={require('../../assets/images/logo-red.png')} 
                    alt='SMU logo' 
                    className= 'logo'
                    />
                </Link>
            </div>
            <Nav />
        </header>
    );
};

export default Header;