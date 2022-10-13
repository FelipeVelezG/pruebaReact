

export async function serviciosTOKEN(){

    
    const URI ="https://accounts.spotify.com/api/token"
    
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=72bca4a2f0194970807d87d76625e4c2"
    const DATO3="client_id=954f21f51efd409fafb4c396d3a79d6c"

    
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }
    
    let respuesta= await fetch(URI,PETICION)

    let datos = await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos  

}