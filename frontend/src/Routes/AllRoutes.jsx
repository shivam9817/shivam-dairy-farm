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
import DetailedProductPage from "../pages/DetailedProductPage";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/blog" element={<PrivateRoute><Blogs /></PrivateRoute>} />
            <Route path="/about" element={<About />} />
            <Route 
            path="/admin" 
            element={<AdminRoute><SidebarWithHeader/></AdminRoute>} 
            />
            <Route path="/productDetail/:id" element={<DetailedProductPage/>}/>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}