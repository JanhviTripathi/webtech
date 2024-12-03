
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="Navbar">
           
            <ul>
                <li><div className="home"><FaHome /></div></li>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li><div className="search"><FaSearch /></div></li>
            </ul>
          
        </nav>
    );
};

export default Nav;
