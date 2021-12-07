import React from 'react';
import facebookLogo from './images/facebookLogo.png'
import instagram from './images/instagram.jpg'
import gym from './images/gym.jpg'

function About(){
    return(
        <div id='about'>
            <div className='gym-image'>
                <img src={gym} alt='image of outside EsteemBjj'/>
            </div>
            <div className='about-text'>
                <h1>ABOUT US</h1>
                <p>Esteem Brazillian Jiu Jitsu was founded in 2010 by Michael Stratton. Michael is a black belt, under Megaton Dias. Michael's craft begins in 1993, where joined the Junior High wrestling team.</p>
                <p>He participated in folk-style, freestyle, and Greco-Roman wrestling form the age of 12-18. After High School, Michael gravitated towards MMA and no gi Jiu Jitsu. He had two MMA fights in 2007 and 2008, which he won.</p>
                <p>In 2010, with the support of his wife(Rosie), he was able to open Esteem. Esteem is a close-knit family enviroment, where everyoen is welcome and egos are left at the door.</p>
                <a href='https://www.facebook.com/michael.stratton.jr/' target='blank'>
                    <img src={facebookLogo} width="100px" alt='facebook logo'/>
                </a>
                <a href='https://www.instagram.com/esteemjiujitsu/?hl=en' target='blank'>
                    <img src={instagram} width="100px" alt='instagram logo'/>
                </a>
            </div>
        </div>
    )
}
export default About;