import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom";

//Outlet maintains the basic layout of header and footer but lets you dynamically change the rest of webpage

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout