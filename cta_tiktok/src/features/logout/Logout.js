import React from "react";
import { logout } from "../../util/firebaseFunctions";
import { useHistory } from "react-redux";

const Logout = () => {
const history = useHistory();

    const handleLogout = () => {
        logout()
        history.push("/");
    };


    return (
        <button type="submit" onClick={handleLogout}>Logout</button>
    )
};

export default Logout;