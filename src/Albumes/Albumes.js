import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes(){

    //DEclarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)

    return(
        <>
            <div className="row-col-1 row-cols-md-4 g-3">

            </div>
        </>
    )
}