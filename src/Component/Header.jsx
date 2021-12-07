import React from 'react';

function Header(){
    return(
        <div id='main'>
            <div className='header-heading'>
                <h1><span>ESTEEM</span>Brazillian Jiu-Jitsu</h1>
                <div className='header-btns'>
                    <a href='/register' className='header-btn'>REGISTER</a>
                    <a href='/login' className='header-btn'>LOG IN</a>
                </div>
            </div>
        </div>
    )
}
export default Header;