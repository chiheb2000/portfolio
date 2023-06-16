import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Skills() {

  return (
    <div className="container px-5 my-5">
  
            <section>
            
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                      
                        <div className="mb-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-terminal"></i></div>
                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">LANGAGES</span></h3>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C</div></div>
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java </div></div>
                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                            </div>
                         
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS / bootstrap</div></div>
                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ReactJS</div></div>
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NodeJs </div></div>
                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">PHP </div></div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB </div></div>
                                
                            </div>
                        </div>
                       
                        <div className="mb-0">
                            <div className="d-flex align-items-center mb-4">
                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-translate"></i></div>
                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Langues</span></h3>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Anglais : Compétence professionnelle générale</div></div>
                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Français : Compétence professionnelle générale</div></div>
                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">  Arabe : Langue maternelle</div></div>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </section>
        </div>
  
  );
}