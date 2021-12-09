import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import axiosInstance from '../api/EsteemAPI'


const Register = (props) => {
    const history = useHistory()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [is_staff, setStaff] = useState('');
    const [email, setEmail] = useState('');

    
    const initialFormData = Object.freeze({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
    updateFormData({
        ...formData,
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
    });
    console.log(formData)
    };

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // let user = {
        //     'username': userName,
        //     'password': password,
        //     'email': email,
        //     'first_name': firstName,
        //     'last_name': lastName,
        //     'is_staff': is_staff,
        // }
        // let response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, user);
        // console.log(response.data);

        console.log(formData)
        axiosInstance
        .post(`auth/create/`, {
            username: formData.userName,
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            password: formData.password,

        })
        .then((res) => {
           // Can return messages from the backend or data
           // After logging in, send the user to login page
            history.push("/login")
        });
    }

    return (
            <div className="container"> 
                <div className="account-form m-auto">
                    <h1>Esteem BJJ</h1>
                    <div className="ms-2 me-2">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Register</legend>
                                <div className="form-group">
                                    <label className="form-label mt-4">Username</label>
                                    <div className="form-floating mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        name="userName"
                                        id="floatingInput" 
                                        placeholder="Username" 
                                        // onChange={(e) => setUserName(e.target.value)}/>
                                        onChange={handleChange}/>
                                        <label for="floatinInput">Username</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label mt-4">Password</label>
                                    <div className="form-floating mb-3">
                                        <input type="password" 
                                        className="form-control" 
                                        name="password"
                                        id="floatingInput" 
                                        placeholder="Password" 
                                        onChange={handleChange}/>
                                        {/* onChange={(e) => setPassword(e.target.value)}/> */}
                                        <label for="floatinInput">Password</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label mt-4">Email</label>
                                    <div className="form-floating mb-3">
                                        <input type="email" 
                                        className="form-control" 
                                        name="email"
                                        id="floatingInput" 
                                        placeholder="email@example.com" 
                                        onChange={handleChange}/>
                                        {/* onChange={(e) => setEmail(e.target.value)}/> */}
                                        <label for="floatinInput">email@example.com</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label mt-4">First Name</label>
                                    <div className="form-floating mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        // name="first_name"
                                        name="firstName"
                                        id="floatingInput" 
                                        placeholder="Bob" 
                                        // onChange={(e) => setFName(e.target.value)}/>
                                        onChange={handleChange}/>
                                        <label for="floatinInput">First Name</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label mt-4">Last Name</label>
                                    <div className="form-floating mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        // name="last_name"
                                        name="lastName"
                                        id="floatingInput" 
                                        placeholder="Smith" 
                                        // onChange={(e) => setLName(e.target.value)}/>
                                        onChange={handleChange}/>
                                        <label for="floatinInput">Last Name</label>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label className="form-label mt-4">Are you Staff?</label>
                                    <div className="form-floating mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        name="is_staff"
                                        id="floatingInput" 
                                        placeholder="1 is staff 0 is team member" 
                                        onChange={(e) => setStaff(e.target.value)}/>
                                        <label for="floatinInput">Are you staff?</label>
                                    </div>
                                </div> */}
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                        <NavLink to="/login">Return to Log In</NavLink>
                    </div> 
                </div>
            </div>
     );
}
 
export default Register;