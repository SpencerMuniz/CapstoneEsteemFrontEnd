import React from 'react';
import validateInformation from './Validate';
import useForm from './UseForm';
//css

const Login = ({submitForm}) => {
    const {handleChange, handleSubmit, values, errors} = useForm(
        submitForm,
        validate
    );
    return(
        <div className='login-form-right'>
            <form onSubmit={handleSubmit} className='login-form' noValidate>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter a User Name'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    <a href='/api/auth'>Log In</a>
                </button>
            </form>
        </div>
    );
};
export default Login;