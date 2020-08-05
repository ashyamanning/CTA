import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { redirect } from "../../util/firebaseFunctions";
import { signUp } from "../../util/firebaseFunctions";
import { useSelector } from "react-redux"
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const token = useSelector((state) => state.token);
    console.log(token);

    const history = useHistory();
    const API = apiURL();

    const handleRedirect = () => {
        redirect();
    };
    const handleSubmit = async () => {
        let signIn = await axios.post(`${API}/api/users`, {
            id: "12",
            firstName,
            lastName,
            userName,
            email,
            // password
        });
        history.push("/");
        return signUp(email, password);
        
    }
    return (
        <>
            <h1>Sign up for TikTok</h1>
            <p>Create a profile, follow other accounts, make your own videos, and more.</p>
            <div>
                <input type="text" value={firstName} name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" value={lastName} name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" value={userName} name="userName" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
                <input type="email" value={email} name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
            <button type="submit" onClick={handleRedirect}>Signup with Github</button>

        </>
    )
};

export default Signup;