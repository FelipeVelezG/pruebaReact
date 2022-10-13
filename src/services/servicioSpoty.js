import { serviciosTOKEN } from "./serviciosTOKEN"
export async function servicioSpoty (){

    const URI="https://api.spotify.com/v1/artists/65HuWBUC1d8ty1q6J42Nfi/top-tracks?market=US"

    const TOKEN=await serviciosTOKEN()

    const PETECION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta = await fetch(URI,PETECION)
    let datos=await respuesta.json()
    return datos

}