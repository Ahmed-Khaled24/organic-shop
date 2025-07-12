import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";

export const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};
