import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {id,img, nombre, desc, precio} ) => {


    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>{precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}