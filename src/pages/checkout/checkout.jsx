import React, { useEffect, useState } from 'react';
import './checkout.css';
import Successo from "./successo.png";

export const Checkout = () => {
  const [tempoTrascorso, setTempoTrascorso] = useState(0);

  useEffect(() => {
    const tempoOrdine = sessionStorage.getItem('tempoOrdine');
    if (tempoOrdine) {
      const differenzaTempo = Date.now() - parseInt(tempoOrdine, 10);
      setTempoTrascorso(differenzaTempo);
    }

    // Aggiornamento del tempo ogni secondo
    const intervallo = setInterval(() => {
      if (tempoOrdine) {
        const differenzaTempo = Date.now() - parseInt(tempoOrdine, 10);
        setTempoTrascorso(differenzaTempo);
      }
    }, 1000);

    return () => clearInterval(intervallo); // Pulizia dell'intervallo quando il componente si smonta
  }, []);

  const convertiTempo = (millisecondi) => {
    const secondi = Math.floor(millisecondi / 1000);
    const minuti = Math.floor(secondi / 60);
    const ore = Math.floor(minuti / 60);

    return `${ore} ore, ${minuti % 60} minuti e ${secondi % 60} secondi`;
  };

  return (
    <div>
        <div className="checkout-container">
            <h2>Ordine completato con successo!</h2>
            <p>Grazie per aver scelto i nostri prodotti. Il tuo pacchetto è stato preparato con cura e sarà spedito al più presto. Se hai ulteriori domande o richieste, non esitare a contattarci.</p>
            <img src={Successo} alt="successo"></img>
            <h4>Ordine effettuato {convertiTempo(tempoTrascorso)} fa.</h4>
        </div>
    </div>
  );
}
