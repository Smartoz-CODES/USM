import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";

export const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    );
};