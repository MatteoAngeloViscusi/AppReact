import React from 'react';
import './contact.css';
import foto1 from "./foto1.png"
import foto2 from "./foto2.png"

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contatti</h2>
      <p>Per qualsiasi domanda o informazione, non esitare a contattarci!</p>
      <div className="contact-info">
        <p><strong>Email:</strong> nutritionsport@gmail.com</p>
        <p><strong>Telefono:</strong> +39 0171 549762</p>
      </div>
      <br></br>
      <hr></hr>
      <h2>Il nostro Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src={foto1} alt="membro1" />
          <h3>Matteo Angelo Viscusi</h3>
          <p>Nutrizionista</p>
          <p>Preparatore</p>
        </div>
        <div className="team-member">
          <img src={foto2} alt="membro2" />
          <h3>Nicolò Migliore</h3>
          <p>Nutrizionista</p>
          <p>Medico</p>
        </div>
      </div>
    </div>
  );
}
