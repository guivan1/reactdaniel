import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './itemList'

export const ItemListContainer = () => {
    const { elementos } = useParams()
    console.log(elementos)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(res => {
                if (elementos) {
                    let array = res.filter(carlos => carlos.categoria === elementos)
                    setData(array)
                } else { setData(res) }
            }
            )
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [elementos])


    return (
        <>
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={data} />
            }
        </>
    )
}
