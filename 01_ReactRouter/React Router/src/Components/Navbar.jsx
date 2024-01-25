import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () =>{
    return(
        <nav>
            <Link to={"/"}>home</Link>
            <br />
            <Link to={"/about"}>about</Link>
        </nav>
    )
}

export default Navbar;