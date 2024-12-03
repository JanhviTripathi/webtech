import React from "react";
import img from "./assets/1687285683825-e6cf23.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = ()=>{
    return (
        <>
        <div className="navbar">
            <div className="logo"><img src={img} alt="" /></div>
            <ul className="list">
                <li>Beauty</li>
                <li>Home</li>
                <li>Native</li>
                
            </ul>
            <ul className="input">
                <li><input type="text" className="text" placeholder="Connaught Place , New..." /></li>
                <li><input type="text" className="text" placeholder="Search For 'AC Service'" /></li>
            </ul>
            <ul className="icon">
                <li><AiOutlineShoppingCart /></li>
                <li><FaRegCircleUser /></li>
            </ul>
        </div>
        </>
    )
}

export default Nav;