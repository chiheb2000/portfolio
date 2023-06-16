
import React, { Component } from 'react';
import profileImage from '../img/1-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import video from '../vidéo présentation.mp4';
class Acceuil extends Component {
  
  handleDownload = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/cv chiheb baya chatti (2).pdf`;
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'CV_Chiheb.pdf'; // Set the desired file name
  
    // Programmatically click the link to initiate the download
    link.click();
  };
  componentDidMount() {
    const videoModal = document.getElementById('videoModal');
    videoModal.addEventListener('hidden.bs.modal', this.handleModalClose);
  }

  componentWillUnmount() {
    const videoModal = document.getElementById('videoModal');
    videoModal.removeEventListener('hidden.bs.modal', this.handleModalClose);
  }
  handleModalClose = () => {
    const videoElement = document.getElementById('videoElement');
    if (videoElement) {
      videoElement.pause();
    }
  };



  render() {
    return (
      <header className="py-5" style={{ backgroundColor: '#99a3c929' }}>
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
               
                    <h5>Bienvenue</h5>
                  
                </div>
                <div className="fs-3 fw-light text-muted">Je m'appelle Chiheb,</div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">Je suis un développeur Full Stack</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <button
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    onClick={this.handleDownload}
                  >
                    Télécharger CV
                  </button>
                  <button  className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" data-bs-toggle="modal"
                            data-bs-target="#videoModal">
                            Lire la vidéo
                        </button>
                       
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src={profileImage} alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Un de mes projets</h3>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                </div>

                <div className="modal-body">
                    
                    <div className="ratio ratio-16x9">
                    <video className="embed-responsive-item" id="videoElement" title="Video Presentation" src={video} controls></video>

                    </div>
                    <br/>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <h3 className="badge bg-gradient-primary-to-secondary text-white me-md-2">Pour en voir plus suivez mon github :</h3>
                    <a className="btn btn-secondary btn-sm" href="https://github.com/chiheb2000">
                      <i className="bi bi-github"></i>
                        </a>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
      </header>
    );
  }
}

export default Acceuil;
