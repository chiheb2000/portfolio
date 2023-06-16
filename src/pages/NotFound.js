import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Epi from '../img/error-2129569__340.jpg';
import {  NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function NotFound() {

  return (
   
    <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="text-center row">
        <div className=" col-md-6">
            <img src={Epi} alt=""
                className="img-fluid"/>
        </div>
        <div className=" col-md-6 mt-5">
            <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <NavLink to="/" exact="true" className="btn btn-primary">Go Home</NavLink>
        </div>

    </div>
</div>

  );
}