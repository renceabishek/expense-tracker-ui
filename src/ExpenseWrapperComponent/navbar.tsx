import React from "react";
import {Link, NavLink} from "react-router-dom"
import "./navbar.scss"

export const Navbar =()=>{
    return <nav > 
        <Link className="title" to="/">Wesbite</Link>
        <div className="menu">
        <span></span>
        <span></span>
        <span></span>
        </div>
    <ul>
        <li><NavLink to="/expenses">Expenses</NavLink></li>
        <li><NavLink to="/admin" >Admin</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>

        
    </nav>
}