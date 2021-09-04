import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext'
import {Counter} from "../counter/counter"

export const ItemDetail = ({ categoria, id, nombre, desc, img, precio,stock }) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            categoria, id, nombre, desc, img, precio, cantidad
        })
    }


    return (
        <div>
           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        <strong>Precio: </strong>{precio}<br />
                        <strong>Descripcion: </strong>{desc}
                    </Card.Text>
                    <Link to={`/categoria/${categoria}`} className="btn btn-primary">Volver</Link>
                </Card.Body>
               
            </Card>
            < Counter 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAdd} 
                agregado={isInCart(id)}
            />
              {/* <Link to={`/categoria/${categoria}`} className="btn btn-primary">Volver</Link>  */}

           
        </div>
    )
}
