import { Outlet } from "react-router-dom";
import Footer from "./footer/footerPage";
import Nav from "./nav/navBar";

export function Layout() { 
    return(
        <>
        <Nav />
        <Outlet />
        <Footer />
        </>
    )
}