import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </nav>
    )
};

export default NavBar;