import React from 'react';

function Contact(){
    return(
        <div id='contact'>
            <h1>Contact Us</h1>
            <form action='https://formsubmit.co/esteemjiujitsu@yahoo.com' method='POST'>
                <input type='hidden' name='subject' value='New Inquiry for Esteem BJJ' />
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Enter Email' required/>
                <textarea placeholder='Write your question here' name='question'></textarea>
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
export default Contact;