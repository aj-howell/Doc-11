import React from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";
import Auth from '../../services/AuthorizationService';
import { useState } from "react";

const Register= () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        const userData = { username, email, password };

        e.preventDefault()
        const response = await Auth.register(username, email, password);
        
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response._id);
        
        //navigate to admin page
        navigate('/');
    }


    return(
        <>
        <h1>Register page</h1>
        <form className="form-register" onSubmit={handleSubmit}>
            <div className="box"></div>
            <h2>Create an account:</h2>
            
            <div className="input-email">
                <p className="p-email">Email:</p>
                <input type="text" placeholder="Email" required
                onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
            <div className="input-username">
                <p className="p-username">Username:</p>
                <input type="text" placeholder="Username" required
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="input-password">
                <p className="p-password">Password:</p>
                <input type="password" placeholder="Password" required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Register!</button>
            <div>
                {/* <button type="submit">Register</button>  fix this link reroute*/}
                <a href="http://127.0.0.1:5500/client/public/login.html">Already have an account?</a>
            </div>
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>

        </form>
        </>
    )
};

export default Register