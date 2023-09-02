import React from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contacto = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_mdi9607', 'template_ema372i', event.target, 'kC7ZAyhECiAzUl1OD')
      .then(response => {
        // Mostrar notificación de éxito
        toast.success('Email enviado exitosamente!');
      })
      .catch(error => {
        // Mostrar notificación de error
        toast.error('Error al enviar el email!');
      });
  };

  return (
    <section id="contacto" className="contacto-section">
      <h1 className="title-form">Contáctanos</h1>
      <div className="contacto-container">
        <div className="div-form">
          <form className="form-mail" onSubmit={sendEmail}>
            <label>Nombre Completo</label>
            <input placeholder="Tú Nombre" type="text" name="user_name" required />
            <label>Email</label>
            <input placeholder="Tú Correo Electrónico" type="email" name="user_email" required />

            <label>Mensaje</label>
            <textarea placeholder="Tú Mensaje" name="user_message" cols="30" rows="10" required></textarea>
            <button>Enviar...</button>
          </form>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contacto;
