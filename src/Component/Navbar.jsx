import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import esteemLogo from './images/esteemLogo.jpg';
//css

function Navbar() {
    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? "nav active" : "nav"}>
            <NavLink to='/' className='esteemLogo'>
                <img src={esteemLogo} alt=''/>
            </NavLink>
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><NavLink to='/'>About</Navlink></li>
                <li><NavLink to='/'>Trainers</Navlink></li>
                <li><NavLink to='/'>Team News</Navlink></li>
                <li><NavLink to='/'>Schedule</Navlink></li>
                <li><NavLink to='/'>Contact</Navlink></li>
                <li><NavLink to='/'>Account</Navlink></li>
            </ul>
        </nav>
    )
}