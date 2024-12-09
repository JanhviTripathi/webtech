import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo2.png';

const LandingPage =()=>{
    return(
        <div className="home">
        <div className="side1">
            <h1>WELCOME TO SHOPEASE</h1>
            <h2>ShopEase</h2> 
            <p>Your one-stop shop for everything!</p>
            <Link to={"/homePage"}><button className="button">Shop Now</button></Link>
        </div>
        <div className="side2">
            <img src={logo} alt="" />
        </div>
       </div>
    )
}

export default LandingPage;