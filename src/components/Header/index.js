import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className='p-4 flex-row justify-space-between-lg justify-center'>
            <div>
            <img src={require('../../assets/images/logo.png')} alt='SMU logo' />
            </div>
            <Nav />
        </header>
    );
};

export default Header;