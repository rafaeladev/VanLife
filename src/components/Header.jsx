import { Link } from "react-router-dom";
import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <Link className="header-logo" to="/">
                #VanLife
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
