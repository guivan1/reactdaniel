import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
// import { pedirDatos } from '../../helpers/pedirDatos'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    //   const {loading, setLoading} = useContext(UiContext)
    const { catId } = useParams()
  console.log()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')

        // eslint-disable-next-line no-undef
        if (catId) {
            const filtrado = productos.where('categoria', '==', catId  )
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    console.log(data)
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {

            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    console.log(data)
                    
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

    }, [catId, setLoading])


    return (
        <>
            {loading
                ? <Loader />
                // ? <h2>Cargando...</h2>
                : <ItemList productos={data} />
            }
        </>
    )
}



// pedirDatos()
        //     .then(res => {
        //         if (elementos) {
        //             let array = res.filter(carlos => carlos.categoria === elementos)
        //             setData(array)
        //         } else { setData(res) }
        //     }
        //     )
        //     .catch(err => console.log(err))
        //     .finally(() => {
        //         setLoading(false)
        //     })