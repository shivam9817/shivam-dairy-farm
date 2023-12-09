import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Products(){
    
    useEffect(() => {
        const storedAccessToken = localStorage.getItem("access_token");
        if (storedAccessToken) {
        //   setIsLoggedIn(true);
        //   setAccessToken(storedAccessToken);
        }
      }, []);
    return(
        <>
        <Navbar/>
           <div className="mt-20 w-full">
            <h1 className="text-3xl font-bold">Product Page</h1>
        </div>
        <Footer/>
        </>
    )
}