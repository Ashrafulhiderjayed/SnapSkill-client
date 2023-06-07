import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Outlet  className='max-w-screen-xl mx-auto' /> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;