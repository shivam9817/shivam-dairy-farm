import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/blog" element={<Blogs/>}/>
        </Routes>
    )
}