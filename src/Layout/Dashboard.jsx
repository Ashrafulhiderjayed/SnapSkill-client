
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import {
  FaChalkboardTeacher,
  FaHome,
  FaShoppingCart,
  FaThLarge,
  FaWallet,
} from "react-icons/fa";
// import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true
//   const isInstructor = false

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side bg-primary'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full text-base-content'>
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to='/dashboard/manageClass'>
                  <FaThLarge></FaThLarge> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageUser'>
                  <FaThLarge></FaThLarge> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to='/dashboard/addClass'>
                  <FaChalkboardTeacher></FaChalkboardTeacher> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/myClass'>
                  <FaChalkboardTeacher></FaChalkboardTeacher>My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/dashboard/mycart'>
                  <FaShoppingCart></FaShoppingCart> My Selected Classes
                  <span className='badge badge-secondary'>
                    +${cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/enrollClass'>
                  <FaWallet></FaWallet> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/paymentHistory'>
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
