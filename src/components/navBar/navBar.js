import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CartIcon from './cartIcon.js';
import './navBar.css';

function NavBar() {
    const [displayDropdown, setDisplayDropdown] = useState('none');
    const handleMouseEnter = () => {
        setDisplayDropdown('inline-flex')
    }
    const handleMouseLeave = () => {
        setDisplayDropdown('none')
    }
    return (
        <header>
            <div className='nav-bar'>
                <img src={logo} alt='logo Manos de Tijera' className='img-small' />
                <nav>
                    <ul>
                        <NavLink to='/' exact activeClassName='active-li' ><li>INICIO</li></NavLink>
                        <NavLink to='/products' exact activeClassName='active-li' ><li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='hover-to-dropdown'>PRODUCTOS</li></NavLink>
                        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: displayDropdown }} className='dropdown-menu' id='dropdown-menu'>
                            <li><NavLink to='/categories/tintura-fantasia' activeClassName='active-li'>TINTURAS</NavLink></li>
                            <li><NavLink to='/categories/shampoo-matizador' activeClassName='active-li'>SHAMPOO</NavLink></li>
                        </ul>
                        <NavLink to='/faqs' exact activeClassName='active-li'><li>FAQs</li></NavLink>
                    </ul>
                </nav>
                <NavLink to='/cart' exact activeClassName='active-img'><CartIcon /></NavLink>
            </div>
        </header>
    )
}

export default NavBar;