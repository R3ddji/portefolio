import { React } from "react";
import '../Footer/Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div class="container-fluid">
                <footer class="py-3 pt-5">
                    <div className="row">
                        <div className="col">
                            <h1>Léo BOURIN</h1>
                        </div>
                        <div className="col">
                            <ul class="nav">
                                <h2>Plan du site</h2>
                                <li class="nav-item"><a href="/" class="nav-link px-2">Accueil</a></li>
                                <li class="nav-item"><a href="/realisation" class="nav-link px-2">Mes Réalisations</a></li>
                                <li class="nav-item"><a href="/contact" class="nav-link px-2">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul class="nav">
                                <h2>Me suivre</h2>
                                <li class="nav-item"><a href="https://www.linkedin.com/in/l%C3%A9o-bourin-8790651b7/" class="nav-link px-2">Linkedin</a></li>
                                <li class="nav-item"><a href="https://github.com/R3ddji" class="nav-link px-2">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <p class="text-end">© 2023 Gang Industry. Tous Droits Réservés.</p>
                </footer>
            </div> 
        </div>
    );
}

export default Footer;