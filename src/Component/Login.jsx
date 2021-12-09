import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../api/EsteemAPI';
import { useHistory } from 'react-router-dom';
//css

function Login(props){
    const history = useHistory()
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const initialFormData = Object.freeze({
        username: "",
        password: "",
      });
    
      const [formData, updateFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let user = {
        //     'username': userName,
        //     'password': password
        // }
        // let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, user);
        // console.log(response.data);
        // const token = response.data;
        // localStorage.setItem('token', token.access);

                    
        axiosInstance.post(`auth/token/`, {
            username: formData.username,
            password: formData.password,
        })
        .then((res) => {
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + localStorage.getItem("access_token");

            // Store the user in localStorage
            localStorage.setItem("user", JSON.stringify(res.data))

            // Redirect after logging in to the logged in page
            history.push("/comments")
            console.log("SUCCESS USER LOGGED IN")
        });
    }

    return ( 
        <div className="logincontainer">
            <div className="account-form m-auto">
                <h1>Esteem BJJ</h1>
                <div className="ms-2 me-2">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Log In</legend>
                            <div className="form-group">
                                <label className="form-label mt-4">Username</label>
                                <div className="form-floating mb-3">
                                    <input type="text" 
                                    className="form-control" 
                                    name="username"
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
                                    // onChange={(e) => setPassword(e.target.value)}/>
                                    onChange={handleChange}/>
                                    <label for="floatinInput">Password</label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                    <Link to="/register">Register Now</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Login;