import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function GeneralLayout(){
    return(<>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>)
}