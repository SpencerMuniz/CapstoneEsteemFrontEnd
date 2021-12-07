import React from 'react';
import success from './images/success.jpg'
const FormSuccess = () => {
    return(
        <div className='form-content-right'>
            <h1 className='form-success'>Congratulations! You now have an Esteem Account!</h1>
            <a href='/login' className='login-btn'>Login Here</a>
            <img className='form-img-2' src={success} alt='success-image' />
        </div>
    )
}
export default FormSuccess;