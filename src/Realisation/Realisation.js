import { React } from "react";
import '../Realisation/Realisation.css'
import coursepetitprince from '../img/coursepetitprince.png'

function Realisation() {
    return (  
        <div className="Realisation">
            <div id="realisation" className="container mt-5">
                <h1 className="text-center">Mes Réalisations</h1>
                <div class="row mt-5">
                    <div class="col">
                        <div class="card">
                            <img src={coursepetitprince} width="100%" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Course Du Petit Prince</h5>
                                <p class="card-text">Création d'un site pour une association.</p>
                                <a href="https://blogleob.fr/" class="btn btn-primary">Voir</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={coursepetitprince} width="100%" alt=""/>
                            <div class="card-body">
                            <h5 class="card-title">Course Du Petit Prince</h5>
                                <p class="card-text">Création d'un site pour une association.</p>
                                <a href="https://blogleob.fr/" class="btn btn-primary">Voir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Realisation;