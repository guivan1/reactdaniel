import React, { useEffect, useState } from 'react';

export const itemCount = () => {

const [contador, setContador] = useState({})
 const [isDisable, setIsdisable] = useState( {decrease: false,add: false} );

  





    useEffect( ()=> {
        count===initial&& setIsdisable({...isDisable, decrease:true});
        count===stock&& setIsDisable{}
        count> initial &&
        count< stock &&
        setIsdisable({})

        return () => {
            console.log("Componente desmontado")
        }
    }, [])
    
    useEffect( ()=>{
        console.log("Actualizado contador")
    }, [contador])

    return (
        <div className="container" onClick={handleClick} >

            <h2>Click tracker</h2>
            <hr/>

            <p>Clicks: {contador.clicks}</p>
            <p>Clickeado el: {contador.fecha}</p>
        </div>
    )
}