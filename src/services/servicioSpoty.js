export async function servicioSpoty (){

    const URI="https://api.spotify.com/v1/artists/65HuWBUC1d8ty1q6J42Nfi/top-tracks?market=US"

    const TOKEN="Bearer BQBDNKlvKCvwXgxY8G0L7rqi9bMpNsXNDzKGGEsQxelIJ4DyYj6suLFYTvkQfR2ijFzeNEqSgQH0N8OgWzs5I4S3urWZjoeLRlm_1NqOXEnmJb_zA9F7qiqKVUhvNJY_y-yHExgfbPSVvjzsEMFcFvuwEwWSTc6lM9xrGD5kR-B-f2tFTbxtUZf-pyaR6rO6nqs"

    const PETECION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta = await fetch(URI,PETECION)
    let datos=await respuesta.json()
    return datos

}