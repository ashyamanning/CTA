import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1>Log in to TikTok</h1>
            </div>
            <div>
                <p>Manage your account, check notifications, comment on videos, and more.</p>
            </div>
            
            <div>
                {/* <button type="submit" onClick={}>Use phone / email / username</button>
                <button type="submit" onClick={}>Log in with Facebook</button>
                <button type="submit" onClick={}>Log in with Google</button>
                <button type="submit" onClick={}>Log in with Twitter</button>
                <button type="submit" onClick={}>Log in with Apple</button>
                <button type="submit" onClick={}>Log in with Instagram</button> */}
            </div>
            <div>
                <p>
                    Don't have an account? 
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
                </p>
            </div>
        </>
    )
};

export default Login;