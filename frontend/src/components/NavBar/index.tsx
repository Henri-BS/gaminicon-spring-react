import React, { useState } from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom'
import './index.css';
import DropDonw from 'components/Dropdonw';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdonw] = useState(false);
    const handleClick = () => setClick(!click);   
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <Link to='/'
                    className='navbar-logo nav-css'>
                    Gaminicon
                </Link>
                <div className='menu-icons' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav menu'}>
                    <li className={'nav-item'}>
                        <Link to='/' className='nav-links ' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Services <i className='fas fa-creat-down' />
                        </Link>
                        {dropdown && <DropDonw/>}
                    </li>
                    <li className={'nav-item'}>
                        <Link to='/contact-us' 
                        className='nav-links ' 
                        onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className={'nav-item'}>
                        <Link to='/sing-up' 
                        className='nav-links ' 
                        onClick={closeMobileMenu}>
                            Sing Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default Navbar;
