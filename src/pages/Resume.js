import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export default function Resume() {

  return (
    <div className="container px-5 my-5">
    <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Experience</span></h1>
    </div>
    <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          
            <section>
            
                
               
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">05/02/2022 - 30/05/2022</div>
                                    <div className="small fw-bolder">Stagiaire</div>
                                    <div className="small text-muted">Chaaben Technology Group</div>
                                    <div className="small text-muted">Sahloul,Sousse</div>
                                </div>
                            </div>
                            <div className="col-lg-8"><div>Projet SFE : "Smart_Parking":
Une application cross plateforme offerte à l'administrateur du parking et à l'ensemble des conducteurs.
Cette application permettra à l'administrateur de gérer l'ensemble des parking qu'il a, de suivre en temps réel les réservation faites et de voir des statistiques relatives au parking. 
les conducteurs cette application permettra de repérer les parkings et de les positionner par rapport à sa position actuelle.
 Un système embarqué qui sera monté  dans le parking à gérer. 
       Environnement du développement :  Javascript,HTML5,CSS3, JSON 
         MongoDB,Cordova,Node Js, C++.</div></div>
                        </div>
                    </div>
                </div>
             
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">01/08/2021 - 31/08/2021</div>
                                    <div className="small fw-bolder">Stagiaire</div>
                                    <div className="small text-muted">Axia Solutions </div>
                                    <div className="small text-muted">M'saken,Sousse</div>
                                </div>
                            </div>
                            <div className="col-lg-8"><div>Application web "streaming movies" : Un site web qui permet de regarder des films et de les télécharger.</div></div>
                        </div>
                    </div>
                </div>
            </section>
      
         
        </div>
    </div>
</div>
  );
}