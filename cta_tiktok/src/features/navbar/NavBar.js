import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    const homeNav = () => {
        return (
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/trending">Watch Now</NavLink>
            </nav>
        )
    };

    const watchNowNav = () => {
        if (currentUser) {
            return (
                <nav>
                <NavLink to="/trending">
                    <img src="https://www.pinclipart.com/picdir/middle/145-1450618_2d-artist-tik-tok-logo-png-clipart.png" alt="TikTok logo"/>
                </NavLink>
                <NavLink to="/upload">Upload</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </nav>
            )
        } else {
            return (
                <nav>
                    <NavLink to="/trending">
                    <img src="https://www.pinclipart.com/picdir/middle/145-1450618_2d-artist-tik-tok-logo-png-clipart.png" alt="TikTok logo"/>
                    </NavLink>
                    <NavLink to="/upload">Upload</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            )
        };
    };

    return (
        <>
            {!currentUser ? homeNav : watchNowNav}
        </>
    );
};

export default NavBar;