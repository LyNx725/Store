import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "../firstpage/Navbar";
import Footer from "../Footer";
function Account()
{
    return(
        <div>
            <NavBar/>
            <Signup/>
            <Login/>
            <Footer/>
        </div>
    );
}
export default Account;