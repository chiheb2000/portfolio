import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Epi from '../img/1_5.jpg';
import isitcom from '../img/logo-isitcom.png';
import LFHM from '../img/LFHM.png';

export default function Scolaire() {
  return (
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Parcours Scolaire</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card overflow-hidden shadow rounded-4 border-0">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-4">
                    <h2 className="fw-bolder">Epi Digital School Sahloul</h2>
                    <div className="text-primary fw-bolder mb-2">2022 - en cours</div>
                    <p>Diplôme National d'Ingénieur en Informatique</p>
                  </div>
                </div>
                <img
                  className="img-fluid mx-auto d-block"
                  src={Epi}
                  alt="Epi Digital School"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card overflow-hidden shadow rounded-4 border-0">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-4">
                    <h2 className="fw-bolder">ISITCOM Hamem-Sousse</h2>
                    <div className="text-primary fw-bolder mb-2">2019 - 2022</div>
                    <p>LICENCES APPLIQUÉES EN TÉLÉCOMMUNICATION</p>
                  </div>
                </div>
                <img
                  className="img-fluid mx-auto d-block"
                  src={isitcom}
                  alt="isitcom"
                  style={{ maxWidth: '70%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card overflow-hidden shadow rounded-4 border-0">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-4">
                    <h2 className="fw-bolder">Lycée Farhat Hached M'saken</h2>
                    <div className="text-primary fw-bolder mb-2">2018-2019</div>
                    <p>Bac Mathématique</p>
                  </div>
                </div>
                <img
                  className="img-fluid mx-auto d-block"
                  src={LFHM}
                  alt="LFHM"
                  style={{ maxWidth: '70%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
