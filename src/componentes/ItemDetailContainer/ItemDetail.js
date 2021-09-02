import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

export const ItemDetail = ({ categoria, id, nombre, desc, img, precio }) => {


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
        </div>
    )
}
