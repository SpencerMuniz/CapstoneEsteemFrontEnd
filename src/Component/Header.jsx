import React from 'react';

function Header(){
    return(
        <div id='main'>
            <div className='header-heading'>
                <h1><span>ESTEEM</span></h1>
                <h2> Brazillian Jiu-Jitsu</h2>
                <div className='header-btns'>
                    <h3><a href='/register' className='header-btn'>REGISTER </a></h3>
                    <h4><a href='/login' className='header-btn'>LOG IN</a></h4>
                </div>
            </div>
        </div>
    )
}
export default Header;