import React from 'react'
import { useNavigate } from "react-router-dom";
import "./ordine.css";

export const Ordine = () => {
    const navigate = useNavigate();

    return (
    <div>
        <br /><br />
        <div className='ordine-container'>
            <label htmlFor="nome">Nome:  </label>
            <input type="text" id="nome" name="nome" required/><br/>
            
            <label htmlFor="cognome">Cognome:  </label>
            <input type="text" id="cognome" name="cognome" required/><br/>
            
            <label htmlFor="metodo_pagamento">Metodo di Pagamento:  </label>
            <select id="metodo_pagamento" name="metodo_pagamento" required>
                <option value="carta">Carta di Credito</option>
                <option value="paypal">PayPal</option>
                <option value="bonifico">Bonifico Bancario</option>
            </select><br/>
            
            <label htmlFor="email">Email:  </label>
            <input type="email" id="email" name="email" required/><br/>
            
            <label htmlFor="indirizzo">Indirizzo di Spedizione:  </label>
            <input  type="text" id="indirizzo" name="indirizzo" required/><br/>
            
            <label htmlFor="note">Note Aggiuntive:  </label>
            <input type="text" id="note" name="note" /><br/><br/>
            
            <button onClick={() => navigate("/checkout")}>Completa Ordine</button>
        </div>
    </div>
  )
}
