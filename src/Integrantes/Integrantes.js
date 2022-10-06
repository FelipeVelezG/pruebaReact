import './Integrantes.css';
import 'animate.css';
import WOW from 'wowjs';

import { useEffect} from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    },[])

    return (
        <>
            <div className="row my-2  justify-content-center">
                <div className="col-12 col-md-4  mt-5 zoom">
                    <img id='cursor' src="https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/WillyRodrigez2010.jpg?alt=media&token=178b9ac8-5cd6-4c2d-bfcc-a03b5df72ba5" alt="" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className="col-12 col-md-4 mt-5 align-self-center border-start animate__animated animate__backInRight wow ">
                    <h2>Willy Rodriguez</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Nació y se crió en la ciudad de Nueva York. Sus estudios de música comenzaron en la iglesia donde aprendió a cantar y tocar música clásica. Su forma de tocar el piano se desarrolló rápidamente en todas las direcciones mientras estudiaba música clásica, salsa, jazz y música popular.
                        </div>
                    </div>
                </div>

            </div>
            <div className="row my-2  justify-content-center">
                <div className="col-12 col-md-4 mt-5 align-self-center text-end border-end animate__animated animate__backInLeft wow">
                    <h2>Boris Bilbraut</h2>
                    <h3>Baterista</h3>
                </div>
                <div className="col-12 col-md-4  mt-5 zoom">
                    <img id='cursor' src="https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/BorisBilbraut2000.jpg?alt=media&token=2477bdbd-fef2-48cf-a83c-dc24134fbc86" alt="" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample1" />
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                            El baterista Boris Bilbraut está en nueva etapa de juego con el reggae que lo identifica musicalmente, en la que se está permitiendo ciertas libertades sin perderse del sonido que sus seguidores conocieron desde que formó parte de Cultura Profética.
                        </div>
                    </div>
                </div>

            </div>
            <div className="row my-2  justify-content-center">
                <div  className="col-12 col-md-4  mt-5 zoom">
                    <img id='cursor' src="https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/eliutGonz%C3%A1lez.jpg?alt=media&token=10606560-5145-4352-8999-c53c15f13cce" alt="" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample2" />
                </div>
                <div className="col-12 col-md-4 mt-5 align-self-center border-start animate__animated animate__backInRight wow">
                    <h2>Eluit Gonzalez</h2>
                    <h3>Guitarrista</h3>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample2">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body">
                            Con casi 20 años en la industria, la banda Cultura Profética se ha convertido en un ícono de la música latina. People en Español habló con Omar Silva, uno de sus integrantes, y nos contó sobre el exitoso año que ha tenido el grupo puertorriqueño.
                        </div>
                    </div>
                </div>

            </div>
            <div className="row my-2  justify-content-center">
                <div className="col-12 col-md-4 mt-5 align-self-center border-end animate__animated animate__backInLeft wow text-end">
                    <h2>Omar Silva</h2>
                    <h3>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4  mt-5 zoom">
                    <img id='cursor' src="https://firebasestorage.googleapis.com/v0/b/webii-1e064.appspot.com/o/omarSilva2000.jpg?alt=media&token=0e6acd6f-1854-4596-8a04-c6bf72449f2e" alt="" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample3" />
                </div>

            </div>

        </>
    )

}