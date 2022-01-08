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
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className={'nav-item'}>
                        <Link to='/Home' 
                        className='nav-links ' 
                        onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li  className={'nav-item'}>
                        <Link to='/explorar'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Explorar <i className='fas fa-creat-down' />
                        </Link>
                        {dropdown && <DropDonw />}
                    </li>
                    <li className={'nav-item'}>
                        <Link to='/suporte'
                            className='nav-links '
                            onClick={closeMobileMenu}>
                            Suporte
                        </Link>
                    </li>
                    <li className={'nav-item'}>
                        <Link to='/Forum'
                            className='nav-links '
                            onClick={closeMobileMenu}>
                            Forum
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;
