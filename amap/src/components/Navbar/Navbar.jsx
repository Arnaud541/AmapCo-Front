import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <>
        <ul>
            <li><Link to="/"><img className="brand-logo" src="https://cdn.discordapp.com/attachments/1029748840015863830/1052562377893232800/Hamapiens.png"/></Link></li>
            <li> <Link to="/recipes" >recipes</Link></li>
            <li> <Link to="/grower" >growers</Link></li>

            <li> <button className="button"><Link to="/signin" >signin</Link></button></li>
            <li> <button className="button"> <Link to="/signup" >signup</Link></button></li>
        </ul>
        </>
    );
};

export default Navbar;