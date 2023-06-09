import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
    const location = useLocation();

    const removeFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            { removeFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;