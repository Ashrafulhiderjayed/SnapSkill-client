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
      ]
    }
  ]);