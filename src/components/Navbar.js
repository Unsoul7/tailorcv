import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export const Navbar = () => {
    return(
        <nav>
            <img src={logo} alt="" />
            <Link className="navlink" to=''>Resume Builder App</Link>
            <Link className="navlink" to=''>Resume Examples</Link>
            <Link className="navlink" to=''>Resume Templates</Link>
            <Link className="navlink" to=''>Cover Letter Builder</Link>
            <Link className="navlink" to=''>My Account</Link>
            <button>Build My Resume</button>

        </nav>
    )
}