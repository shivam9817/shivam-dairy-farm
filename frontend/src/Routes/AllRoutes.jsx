import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import SidebarWithHeader from "../Admin/Sidebar";
import Products from "../pages/Products";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>} />
            <Route path="/blog" element={<PrivateRoute><Blogs /></PrivateRoute>} />
            <Route path="/about" element={<About />} />
            <Route 
            path="/admin" 
            element={<AdminRoute><SidebarWithHeader/></AdminRoute>} 
            // canActivate={() => {
            //     // Retrieve user role from localStorage or another source
            //     const userRole = localStorage.getItem('user_role');
            //     // Allow access only if the user role is "admin"
            //     console.log(userRole)
            //     return userRole === 'admin';
            //   }}
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}