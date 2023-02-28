import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Dashboard/Customers/Customers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import Orders from "../Pages/Dashboard/Orders/Orders";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ErrorPage from "../Shared/ErrorPage";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/product-detail/:_id",
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/product/${params._id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path: "/user-profile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/dashboard",
                element: <AdminPrivateRoute><DashboardLayout /></AdminPrivateRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/dashboard/add-product",
                        element: <AddProduct />
                    },
                    {
                        path: "/dashboard/products",
                        element: <DashboardProducts />
                    },
                    {
                        path: "/dashboard/customers",
                        element: <Customers />
                    },
                    {
                        path: "/dashboard/orders",
                        element: <Orders />
                    }
                ]
            }
        ]
    }
])