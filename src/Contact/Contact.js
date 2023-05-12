import { React } from "react";
import '../Contact/Contact.css'
import email from '../img/email.png'
import telephone from '../img/telephone.png'
import localisateur from '../img/localisateur.png'

function Contact() {
    return (  
        <div className="Contact">
            <div id="contact" className="container mt-5 pd-5">
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

            <div className="container">
                <form>
                    <h1 className="mb-5">Contactez-Moi</h1>
                    <div class="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="text" name="nom" class="form-control" placeholder="Nom"/>
                            </div>
                            <div className="col">
                                <input type="text" name="prenom" class="form-control" placeholder="Prénom"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <textarea name="message" class="form-control" placeholder="Message" rows="10"/>
                    </div>
                    <button type="submit" class="btn btn-warning mb-3"><span id="buttontext">Envoyer</span></button>
                </form>
            </div>
        </div>
    );
}

export default Contact;