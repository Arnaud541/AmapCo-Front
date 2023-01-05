import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { MenuData } from "./MenuData";

import "./Navbar.css";

function Navbar() {
    return (
        <>
        <nav className="NavbarItems">
        
            <h1 className="logo_1">
                <Link to="/">home</Link>
            </h1>

            <ul className="nav-menu">
            {MenuData.map((item, index)=>{console.log(index)
                return (
                   <li key={index}>
                    <Link to={item.url} className="cName">{item.title}</Link>
                   </li>
                )
            })}
        </ul>
        </nav>
        </>
    );
};

export default Navbar;