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
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/instructors'>Instructors</NavLink></li>
                <li><NavLink to='/comments'>Team News</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/orders'>Account</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;