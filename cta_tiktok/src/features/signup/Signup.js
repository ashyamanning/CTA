import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { redirect } from "../../util/firebaseFunctions";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const API = apiURL();

    const handleRedirect = () => {
        redirect();
    };

    return (
        <>
            <h1>Sign up for TikTok</h1>
            <p>Create a profile, follow other accounts, make your own videos, and more.</p>
            <button type="submit" onClick={handleRedirect}>Signup with Github</button>

        </>
    )
};

export default Signup;