import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

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