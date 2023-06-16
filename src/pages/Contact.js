import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
export default function Contact() {
  const form = useRef();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      emailjs.sendForm('service_67d9oao', 'template_0uj61i3', form.current, 'ctzFJ7naNvfR-lrmB')
        .then(
          (result) => {
            console.log(result.text);
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
          },
          (error) => {
            console.log(error.text);
            setShowErrorAlert(true);
            setShowSuccessAlert(false);
          }
        );
    } else {
      setShowErrorAlert(true);
    }
  };

  const validateForm = () => {
    const { user_name, user_email, Subject, message } = form.current;

    if (user_name.value && user_email.value && Subject.value && message.value) {
      return true;
    }
    return false;
  };

  return (
    <div className="container-xxl pb-5">
      <div className="container py-5">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">Entrer en contact</h1>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          

            <p className="mb-2">Appelez-moi:</p>
            <h3 className="fw-bold">+216 24 611 837</h3>
            <hr className="w-100" />
            <p className="mb-2">Envoyez-moi un e-mail :</p>
            <h3 className="fw-bold">chattichiheb35@gmail.com</h3>
            <hr className="w-100" />

            <div className="d-flex pt-2">
              <a className="btn btn-square btn-primary me-2" href="https://www.facebook.com/bha.baya">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="https://www.linkedin.com/in/chihebeddine-baya-chatti-39681123a/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="https://github.com/chiheb2000">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          {showSuccessAlert && (
              <div className="alert alert-success" role="alert">
                Message envoyé avec succès!
              </div>
            )}

            {showErrorAlert && (
              <div className="alert alert-danger" role="alert">
            Veuillez remplir tout les champs. </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" placeholder="votre nom" name="user_name" />
                    <label htmlFor="name">votre nom</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" placeholder="votre Email" name="user_email" />
                    <label htmlFor="email">votre Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Subject" name="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" name="message" placeholder="Leave a message here" style={{ height: '170px' }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit" value="Send">
                    Envoyer le message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
