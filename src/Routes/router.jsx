import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignInUp from "../Pages/SignUp/SignInUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/Allusers";
import AddItems from "../Layout/Dashboard_Components/AddItems";
import AdminRoute from "./AdminRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <PrivateRoute><Order></Order></PrivateRoute>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignInUp></SignInUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        //normal users 
        {
          path: 'cart',
          element: <Cart></Cart>,
        },

        //admin user
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>,
        },
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
      ],
    },
  ]);