import React from "react";

import { CartWidget } from "./CartWidget/CartWidget"
import { Link } from 'react-router-dom'
export const NavBar = () => {

    return (

        <header className="titulo">
            <h1>TIENDA  DANIELITO</h1>
            <nav>
                <Link className="mx-3" to={"/"}>Inicio</Link>
                <Link className="mx-3" to={"/nosotros"}>Nosotros</Link>
                <Link className="mx-4" to={"/categoria/mother"}>MOTHER</Link>
                <Link className="mx-4" to={"/categoria/periferico"}>TECLADO</Link>
                <Link className="mx-4" to={"/categoria/gabinete"}>GABINETE</Link>
                <Link className="mx-4" to={"/categoria/monitor"}>MONITORES</Link>
                <Link className="mx-4" to={"/categoria/componente"}>componentes</Link>
                
                < CartWidget cantidad={0} />
                <Link className="mx-1" to={"/cart"}>Carrito</Link>

            </nav>
        </header>
    )

}