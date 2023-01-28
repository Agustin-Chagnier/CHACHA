import React from "react";
import {NavLink} from "react-router-dom"






const Navbar = ({links}) => {


    return (
        <header>
            <div>
                <NavLink to="/">
                
                <div>La Chacha</div>

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

