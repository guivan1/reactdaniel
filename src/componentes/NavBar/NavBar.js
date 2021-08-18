import React from "react";

import {CartWidget } from "./CartWidget/CartWidget"

export const NavBar = () => {

    return (

        <header className="titulo">
            <h1>TIENDA  DANIELITO</h1>
            <nav>
                <a href="#"> boton 1</a>
                <a href="#"> boton 2</a>
                <a href="#"> boton 3</a>
                < CartWidget cantidad= {0}/>
            </nav>




        </header>
    )

}
