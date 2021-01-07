import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import "../../css/NavBar.css";

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    // const currentUser = null;

    const homeNav = () => {
        return (
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/login">Watch Now</NavLink>
            </nav>
        )
    };

    const watchNowNav = () => {
        if (currentUser) {
            console.log("user", currentUser);
            return (
                <nav>
                <NavLink to="/trending">
                    <img src="https://www.pinclipart.com/picdir/middle/145-1450618_2d-artist-tik-tok-logo-png-clipart.png" className="tikTokLogo" alt="TikTok logo"/>
                </NavLink>
                <NavLink to="/upload">Upload</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </nav>
            )
        } else {
            return (
                <nav>
                    <NavLink to="/trending">
                    <img src="https://www.pinclipart.com/picdir/middle/145-1450618_2d-artist-tik-tok-logo-png-clipart.png" className="tikTokLogo" alt="TikTok logo"/>
                    </NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            )
        };
    };

    return (
        <>
            {currentUser ? watchNowNav() : homeNav()}
        </>
    );
};

export default NavBar;