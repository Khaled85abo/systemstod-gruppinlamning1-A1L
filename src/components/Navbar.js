import React from "react";
import {Link} from "react-router-dom";

import "../style/_navbar.scss";

const Navbar = () =>{

    
    return(
        <nav className={"nav"}>
            <Link className={"nav-element"} to="/Lessons">Lessons</Link>
            <Link className={"nav-element"} to="/BookForm">Book time</Link>
            <Link className={"nav-element"} to="/Bookings">Bookings</Link>
            <Link className={"nav-element"} to="/Userbooking">My Bookings</Link>
            <Link className={"nav-element"} to="/AuthUser/UserLogin">User Login/profile</Link>

        </nav>
    )
}

export default Navbar;