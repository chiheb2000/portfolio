import React from 'react';

import {  NavLink } from 'react-router-dom';




export default function Navbar() {
  return (
 
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div className="container px-5">
        <NavLink className="navbar-brand" to="/portfolio"><span className="fw-bolder text-primary">Mon Portfolio</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item"><NavLink to="/portfolio" exact="true"  className="nav-link">Accueil</NavLink></li>
                <li className="nav-item"><NavLink to="/Resume" exact="true"  className="nav-link">Experience</NavLink></li>
                <li className="nav-item"><NavLink to="/Scolaire" exact="true"  className="nav-link">Parcours Scolaire</NavLink></li>
                <li className="nav-item"><NavLink to="/Skills" exact="true"  className="nav-link">Compétences </NavLink></li>

                <li className="nav-item"><NavLink to="/Contact" exact="true"  className="nav-link">Contact</NavLink></li>

        

            </ul>
        </div>
    </div>
</nav>


  );
}
