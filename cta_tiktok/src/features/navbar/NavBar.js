import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = null;
    const userToken = useSelector((state) => state);
    console.log(userToken);

    const homeNav = () => {
        return (
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/trending">Watch Now</NavLink>
            </nav>
        )
    };

    const watchNowNav = () => {
        if (userToken) {
            return (
                <nav>
                <NavLink to="/trending">
                    <img src="https://www.pinclipart.com/picdir/middle/145-1450618_2d-artist-tik-tok-logo-png-clipart.png" alt="TikTok logo"/>
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
            {userToken ? homeNav() : watchNowNav()}
        </>
    );
};

export default NavBar;