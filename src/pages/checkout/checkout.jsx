import React from 'react';
import './checkout.css';
import Successo from "./successo.png";

export const Checkout = () => {
  return (
    <div>
        <div className="checkout-container">
            <h2>Ordine completato con successo!</h2>
            <p>Grazie per aver scelto i nostri prodotti. Il tuo pacchetto è stato preparato con cura e sarà spedito al più presto. Se hai ulteriori domande o richieste, non esitare a contattarci.</p>
            <img src={Successo} alt="successo"></img>
        </div>
    </div>
  );
}
