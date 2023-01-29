import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";






const Navbar = ({links}) => {


    return (
        <header id="navbar_header">
            <div>
                <NavLink to="/">
                
                <div id="titulo">La Chacha</div>

                </NavLink>
            </div>
            <nav>
                {links.map((elemento, indice) => {
                    return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
                })}
            </nav>
        </header>
        )
}



export default Navbar

