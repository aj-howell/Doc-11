
const Register= () => {
    return(
        <>
        <h1>Register page</h1>
        <form class="form-register">
            <div class="box"></div>
            <h2>Create an account:</h2>
            <div class="input-firstname">
                <p class="p-firstname">First Name:</p>
                <input type="text" placeholder="First Name" required/>
            </div>
            <div class="input-lastname">
                <p class="p-lastname">Last Name:</p>
                <input type="text" placeholder="Last Name" required/>
            </div>
            <div class="input-email">
                <p class="p-email">Email:</p>
                <input type="text" placeholder="Email" required/>
            </div>
            <div class="input-username">
                <p class="p-username">Username:</p>
                <input type="text" placeholder="Username" required/>
            </div>
            <div class="input-password">
                <p class="p-password">Password:</p>
                <input type="text" placeholder="Password" required/>
            </div>
            <div class="verify-password">
                <p class="p-verify">Re-enter Password:</p>
                <input type="text" placeholder="Verify your Password" required/>
            </div>
            <a>Register!</a>
            <div>
                <a href="http://127.0.0.1:5500/client/public/login.html">Already have an account?</a>
            </div>
        </form>
        </>
    )
};

export default Register