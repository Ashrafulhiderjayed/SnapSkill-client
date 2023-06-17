import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorClass from "../Pages/Dashboard/MyClass/InstructorClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
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
          element: <PopularInstructors></PopularInstructors>,
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
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
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
            <InstructorRoute>
              <AddClass></AddClass>
            </InstructorRoute>
          ),
        },
        {
          path: "addClass",
          element: (
            <InstructorRoute>
              <AddClass></AddClass>
            </InstructorRoute>
          ),
        },
        {
          path: "myClass",
          element: <InstructorClass></InstructorClass>,
        },
      ]
    }
  ]);