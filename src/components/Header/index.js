import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className='flex-row justify-space-between'>
            <div className='p-4'>
            <img src={require('../../assets/images/logo-red.png')} alt='SMU logo' />
            </div>
            <Nav />
        </header>
    );
};

export default Header;