import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
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
            </div>
        </nav>
    );
};

export default Nav;
