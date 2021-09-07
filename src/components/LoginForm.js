import React from 'react'

const LoginForm = () => {
    return (
        <form className="login" action="/">
            <h1>Login</h1>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required />
            <button type="submit" value="Login" >Submit</button>
            <div className="footer">
                <div>
                    <a href="/">Sign Up</a>
                </div>
                <div>
                    <a href="/">Forgot Password</a>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
