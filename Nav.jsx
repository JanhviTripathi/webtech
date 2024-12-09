import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo2.png"
const Nav =()=>{
    return(
        <nav className="nav">
            <div className="logo"><img src={logo} alt="" /></div>
                <ul>
                    
                    <li><Link to="/homePage">Electronics</Link></li>
                    <li><Link to="/homePage/medical">Medical</Link></li>
                    <li><Link to="/homePage/household">Clothes</Link></li>
                    <li><Link to="/homePage/grocerries">Groceries</Link></li>
                    <li><Link to="/homePage/cart">Cart</Link></li>
                </ul>
                <ul className="buttons">
                    <li><Link to="/login"><button className="login">Login</button></Link></li>
                    <li><Link to="/signup"><button className="signup">Singup</button></Link></li>
                </ul>

          

        </nav>
    )
}

export default Nav;