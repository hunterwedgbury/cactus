import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './Nav.scss';
import homeIcon from '../../assets/home.png'
import searchIcon from '../../assets/search.png'
import scanIcon from '../../assets/scan.png'

const Nav = () => {

    const navigateFormPage = useNavigate();

    return (
        
        <section className='nav'>

            <NavLink to='/' className='nav__container'>
                <img className='nav__icons--home' src={homeIcon} alt='Home icon'/>
                <p class='nav__text'>Home</p>
            </NavLink>

            <NavLink to='/scan' className='nav__container'>
                <img className='nav__icons--scan' src={scanIcon} alt='Scan icon'/>
                <p class='nav__text'>Scan</p>
            </NavLink>

            <NavLink to='/discover' className='nav__container'>
                <img className='nav__icons--search' src={searchIcon} alt='Search icon'/>
                <p class='nav__text'>Discover</p>
            </NavLink>

        </section>
    );
};

export default Nav;