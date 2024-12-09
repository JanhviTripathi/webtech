import React from "react";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import { Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <>
        <Outlet/>
        </>
    )
}

export default Layout;