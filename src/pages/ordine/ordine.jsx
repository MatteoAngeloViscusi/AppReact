import React, { useState } from 'react';
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./ordine.css";

export const Ordine = () => {
    const navigate = useNavigate();
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const [formCompleted, setFormCompleted] = useState(false);

    // Funzione per gestire il cambiamento dei campi e aggiornare lo stato di compilazione
    const handleInputChange = () => {
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const email = document.getElementById('email').value;
        const indirizzo = document.getElementById('indirizzo').value;

        if (nome && cognome && email && indirizzo) {
            setFormCompleted(true);
        } else {
            setFormCompleted(false);
        }
    };

    const clearCart = () => {
        checkout();
        console.log("Carrello pulito!");
    };

    const completeOrder = () => {
        clearCart();
        navigate("/checkout");
    };

    return (
        <div>
            <h1>Completa l'acquisto</h1>
            <h3>Scegli il metodo di pagamento</h3>
            <hr />
            <div className='ordine-container'>
                <label htmlFor="nome">Nome:  </label>
                <input type="text" id="nome" name="nome" required onChange={handleInputChange} /><br />

                <label htmlFor="cognome">Cognome:  </label>
                <input type="text" id="cognome" name="cognome" required onChange={handleInputChange} /><br />

                <label htmlFor="metodo_pagamento">Metodo di Pagamento:  </label>
                <select id="metodo_pagamento" name="metodo_pagamento" required>
                    <option value="carta">Carta di Credito</option>
                    <option value="paypal">PayPal</option>
                    <option value="bonifico">Bonifico Bancario</option>
                </select><br />

                <label htmlFor="email">Email:  </label>
                <input type="email" id="email" name="email" required onChange={handleInputChange} /><br />

                <label htmlFor="indirizzo">Indirizzo di Spedizione:  </label>
                <input type="text" id="indirizzo" name="indirizzo" required onChange={handleInputChange} /><br />

                <label htmlFor="note">Note Aggiuntive:  </label>
                <textarea id="note" name="note" rows={5}></textarea><br /><br />

                <button onClick={completeOrder} disabled={!formCompleted}>Completa Ordine</button>
            </div>
        </div>
    )
}