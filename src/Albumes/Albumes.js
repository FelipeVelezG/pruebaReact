import { servicioSpoty } from "../services/servicioSpoty.js"
import { serviciosTOKEN } from "../services/serviciosTOKEN.js"
import { useState, useEffect } from "react"

export function Albumes() {
    

    //DEclarando mi primer useState
    const [canciones, setCanciones] = useState(null)

    //useState para la carga de datos
    const [carga, setCarga] = useState(true)

    //Usando el useEffect
    useEffect(function () {
        servicioSpoty()
            .then(function (respuesta) {
                console.log(respuesta)
                setCanciones(respuesta.tracks)
                setCarga(false)
            })
        // console.log(canciones)
    }, [])

    if(carga==true){

        return(

            <>
                <h1>Estoy cargando...</h1>
            </>

        )

    }
    else{
        return (
            <>
                <div className="row row-col-1 row-cols-md-5 g-3">
                {
                 canciones.map(function (cancion) {
                    return (
                        <>
                            <div className="col mt-5">
                                <div className="card h-100 ">
                                    <img src={cancion.album.images[0].url}
                                        className="img-fluid w-100 h-100" alt="foto">
                                    </img>
                                    <audio src={cancion.preview_url} controls></audio>
                                    
                                </div>

                            </div>
                        </>
                    )
                })
               }
                </div>
               
            </>
        )
    }


    
}