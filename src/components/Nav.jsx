import React from "react";
import { NavLink, Link } from "react-router-dom";
import image from "../images/avatar-icon.png";

const Nav = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    function fakeLogOut() {
        localStorage.removeItem("loggedin");
    }

    return (
        <nav>
            <div className="nav-link-div">
                <NavLink
                    className="nav-link"
                    to="/host"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    Host
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    About
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="vans"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img src={image} alt="avatar icon" />
                </Link>
                <button className="x-button" onClick={fakeLogOut}>
                    X
                </button>
            </div>
        </nav>
    );
};

export default Nav;
