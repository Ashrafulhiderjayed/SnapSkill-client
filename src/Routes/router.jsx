import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import EnrolledClasses from "../Pages/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import Payment from "../Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/AddClass/AddClass";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>,
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>,
        },
        // {
        //     path: 'private',
        //     element: <PrivateRoute><Private></Private></PrivateRoute>,
        // },
      ],
    },
    {
      path: "dashboard",
      element: (
        <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      ),
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>,
        },
        {
          path: "enrollClass",
          element: <EnrolledClasses></EnrolledClasses>,
        },
        {
          path: "payment/:id",
          element: <Payment></Payment>,
          loader: ({ params }) => <Payment id={params.id}></Payment>,
        },
        {
          path: "manageUser",
          element: (
            <AdminRoute> <ManageUsers></ManageUsers> </AdminRoute>
          ),
        },
        {
          path: "manageClass",
          element: (
            <AdminRoute>
              <ManageClasses></ManageClasses>
            </AdminRoute>
          ),
        },
        {
          path: "addClass",
          element: (
            <InstructorRoute><AddClass></AddClass></InstructorRoute>
          ),
        },
        {
          path: "myClass",
          element: <InstructorClass />,
        },
      ]
    }
  ]);