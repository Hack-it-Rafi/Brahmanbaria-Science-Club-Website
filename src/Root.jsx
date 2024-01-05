import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Header from "./Components/Header";

const Root = () => {
    return (
        <div className="w-screen">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;