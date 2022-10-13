import { Footer } from "../Footer/Footer"

export function Musicos() {

    //Un arreglo de objetos es fomato común al consimir un api
    let musicos = [
        {
            nombre: "Willy Rodriguez",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/culturaProfetica6.jpg?alt=media&token=a69a40b7-cf70-400f-8837-a8ce57380156"
        },
        {
            nombre: "Boris Bilbraut",
            rol: "Baterista",
            url: "https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/BorisBilbraut2000.jpg?alt=media&token=2477bdbd-fef2-48cf-a83c-dc24134fbc86"
        },
        {
            nombre: "eliutGonzález",
            rol: "Guitarrista",
            url: "https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/eliutGonz%C3%A1lez.jpg?alt=media&token=10606560-5145-4352-8999-c53c15f13cce"
        },
        {
            nombre: "Omar Silva",
            rol: "Guitarrista",
            url: "https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/omarSilva2020.jpg?alt=media&token=478fe6b7-17e4-49ac-8e5f-2c8c0e63756b"
        },

    ]

    let conciertosMemorables = [
        {
            fecha:"15 de septiembre de 2011",
            pais:"Argentina",
            descripcion:"Grabado en vivo en el Luna Park , Buenos Aires.",
            foto:"https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/Cultura-Profetica-en-el-Luna.jpg?alt=media&token=ec751abf-470a-4664-b239-7299392cbf96"
        },
        {
            fecha:"20 Febrero 2022",
            pais:"Ciudad de Chile",
            descripcion:"Cultura Profética, liderada por uno de los mejores compositores del momento, Willy Rodríguez, regresa a nuestro país para celebrar sus 25 años de carrera y como antesala a su presentación en Lollapalooza Chile a finales de marzo.",
            foto:"https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/vi%C3%B1aDelMar.jpg?alt=media&token=73bb6598-41dc-48e7-8b22-6cc334beea19"
        },
        {
            fecha:"20 Febrero 2007",
            pais:"Colombia",
            descripcion:"Primer concierto de grupo Puertoriqueño en la cuidad de Medellín",
            foto:"https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/CulturaColombia.jpg?alt=media&token=0507adfe-6ae5-4688-a5df-23e57b6b9ce2"
        },
        {
            fecha:"20 Febrero 2008",
            pais:"Estados Unidos",
            descripcion:"Primer concierto de grupo Puertoriqueño en la cuidad de New York",
            foto:"https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/CulturaNewYork.jpeg?alt=media&token=bc2ee682-54c6-4121-9e93-83d39a593cf5"
        },
        {
            fecha:"1 Agosto 2015",
            pais:"Cuba",
            descripcion:"La banda puertorriqueña de reggae urbano Cultura Profética actuará por primera vez en Cuba el próximo 1 de agosto",
            foto:"https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/culturaCuba.jpg?alt=media&token=23680413-19e8-43cb-bd42-add0f2a2db9b"
        },
    ]

    //Mapeando un arreglo para hacer render 
    return (
        <>
            <div className="row row-col-1 row-cols-md-4 g-3">
                {
                    musicos.map(function (musico) {
                        return (
                            <>
                                <div className="col mt-5">
                                    <div className="card h-100 ">
                                        <img src={musico.url}
                                            className="img-fluid w-100 h-100" alt="foto">

                                        </img>
                                        <h1 className="text-center" >{musico.nombre}</h1>
                                        <p className="text-center">{musico.rol}</p>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="row row-col-1 row-cols-md-2 g-3 m-3">
                {
                    conciertosMemorables.map(function(conciertoMemorable){
                        return(
                            <>
                                <div className="col mt-5">
                                    <div className="card h-100">
                                        <img src={conciertoMemorable.foto}
                                            className="img-fluid w-100 h-100" alt="foto" >
                                        </img>
                                        <h1 className="text-center text-danger">{conciertoMemorable.pais}</h1>
                                        <p>{conciertoMemorable.descripcion}</p>



                                    </div>

                                </div>
                            </>
                        )
                    })
                }

            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </>
    )






}