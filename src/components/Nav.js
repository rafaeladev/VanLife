import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="nav-title">
                <Link to="/">#VANLIFE</Link>
            </div>
            <div className="nav-link-div">
                <Link className="nav-link" to="/about">
                    About
                </Link>
                <Link className="nav-link" to="vans">
                    Vans
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
