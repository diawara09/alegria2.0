import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function GeneralLayout(){
    return(<div data-theme="light">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>)
}