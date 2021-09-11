import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
// import { pedirDatos } from '../../helpers/pedirDatos'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './ItemDetail'




export const ItemDetailContainer = () => {
    


    const { itemId } = useParams()

    const [item, setItem] = useState(null)
     const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
        .then((doc) => {
        setItem( {...doc.data(), id: doc.id} )
        })
        .finally(()=> { setLoading(false)})

        // pedirDatos()
        //     .then(res => {
        //         console.log(itemId)
        //         setItem(res.find(prod => prod.id === parseInt(itemId)))
        //     })
        //     .finally(() => { setLoading(false) })

    }, [itemId, setLoading])


    return (
        <div>
            {loading
             ? <Loader/>
                // ? <h2>Cargando...</h2>
                : <ItemDetail {...item} />
            }
        </div>
    )
}
