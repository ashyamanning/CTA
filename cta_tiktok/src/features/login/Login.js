import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../util/firebaseFunctions";
import { updateUser } from "../../token/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login(email, password);
            dispatch(updateUser(res.user));
            history.push("/trending");
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <>
            <div>
                <h1>Log in to TikTok</h1>
            </div>
            <div>
                <p>Manage your account, check notifications, comment on videos, and more.</p>
            </div>
            <div className="loginFormContainer">
                {error ? <div>{error}</div> : null}
                <form onSubmit={handleSubmit} className="loginForm">
                    <input type="email" name="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Log in with Email</button>
                </form>
            </div>
            <div>
                {/* <button type="submit" onClick={}>Log in with Facebook</button>
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