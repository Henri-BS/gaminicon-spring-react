import React, { useState } from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom'
import './index.css';
import DropDonw from 'components/Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdonw] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdonw(false)
        } else {
            setDropdonw(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdonw(false)
        } else {
            setDropdonw(false)
        }
    };
   


    return (
        <>
            <nav className='navbar'>
                <Link to='/'
                    className='navbar-logo nav-css' onClick={closeMobileMenu}>
                    Gaminicon
                    <i/> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to='/explorar'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Explorar <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <DropDonw />}
                    </li>

                    <li className='nav-item'>
                        <Link to='/suporte'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Suporte
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;
