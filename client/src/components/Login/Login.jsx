import { useNavigate } from "react-router-dom";

const Login=()=>
{
    const navigate = useNavigate();

    return(
        <>
            <h1>Login page</h1>
            
            <div class="login-form">
                <form action="">
                    <h2>Please enter in your login details:</h2>
                    <div class="input-username">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div class="input-password">
                        <input type="text" placeholder="Password" required/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                        <label><input type="checkbox"/>Remember User</label>
                    </div>
                    <div>
                        forgot password goes here
                    </div>
                    <div>
                        <button onClick={()=>{navigate('/register')}}>register</button>
                    </div>
                </form>
            </div>
        </>
    )
}



export default Login;