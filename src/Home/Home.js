import { React } from "react";
import '../Home/Home.css'
import face from '../img/me.jpeg'
import email from '../img/email.png'
import telephone from '../img/telephone.png'
import localisateur from '../img/localisateur.png'
import coursepetitprince from '../img/coursepetitprince.png'

function Home() {
    return (
        <div className="Home">
            {/* REALISATION */}
            <div id="realisation" className="container mt-5">
                <h1 className="text-center">Mes Réalisations</h1>
                <h2>À la une</h2>
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
            {/* ABOUT */}
            <div id="about" className="container mt-5">
                <h1 className="text-center">À propos</h1>
                <h2>Qui suis-je ?</h2>
                <div className="row mt-5">
                    <div class="col">
                        <img src={face} class="rounded-circle border w-75" alt=""/>
                    </div>
                    <div class="col">
                        <p>Bonjour,</p>
                        <p>Je m'appelle Léo, j'ai 20 ans, Je suis étudiant en informatique à Ynov Bordeaux Campus. En 3ème année de bachelor option cybersécurité.</p>
                        <p>J'aime aussi créer des sites web. Je suis à la recherche d'une alternance pour septembre 2023.</p>
                        <p>Je suis à l'aise en équipe, j'ai l'habitude de travailler en groupe. Je n'ai pas de mal à m'intégrer dans un groupe de travail pour un projet.</p>
                        <p>Bienvenue sur mon portefolio !</p>
                    </div>
                </div>
            </div>
            {/* CONTACT */}
            <div id="contact" className="container mt-5 pd-5">
                <h1 className="text-center">Contact</h1>
                <div className="row mt-5">
                    <div class="col">
                        <div className="contact-card">
                            <img src={email} alt=""/>
                            <h2>Mail</h2>
                            <h3>leo.bourin@ynov.com</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div className="contact-card">
                            <img src={telephone} alt=""/>
                            <h2>Tél</h2>
                            <h3>0789225386</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div className="contact-card">
                            <img src={localisateur} alt=""/>
                            <h2>Localisation</h2>
                            <h3>France/Bordeaux</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;