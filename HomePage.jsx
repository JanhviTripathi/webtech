import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import { globalVar } from "../globalContext/GlobalContext";

const HomePage =()=>{
 
    return(
        <>
        <Nav/>
        <Outlet/>
        
        </>
    )
}

export default HomePage;