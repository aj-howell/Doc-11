import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import './Login.css';
import Auth from '../../services/AuthorizationService';


const Login=()=>
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await Auth.login(email, password);
        

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.id);

        console.log(response);
        
        //navigate to admin page
        navigate('/');
    };

    return(
        <>
            <h1>Login page</h1>
            
            <div class="login-form">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Please enter in your login details:</h2>
                    <div className="input-username">
                        <input type="text" placeholder="Email" required
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-password">
                        <input type="password" placeholder="Password" required
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    
                    <div>
                        <button onClick={()=>{navigate('/register')}}>New Here? Register a New Account</button>
                    </div>
                </form>
                <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            </div>
        </>
    )
}



export default Login;