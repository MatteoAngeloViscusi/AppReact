import React from 'react';
import "./home.css";
import foto from "./nutrizioneSportiva.png";

export const Home = () => {
  return (
    <div className='home-container'>
      <h1>Benvenuti nel Nutrition Sport Shop!</h1>
      <h4>Il tuo punto di riferimento per una vita attiva e sana. Siamo qui per aiutarti a raggiungere i tuoi obiettivi di fitness e performance sportiva fornendoti i migliori prodotti di nutrizione e integratori sul mercato.</h4>
      <hr></hr>
      <h2>La nostra filosofia</h2>
      <p>Crediamo fermamente che una buona alimentazione sia alla base di ogni regime di allenamento efficace. Per questo motivo, ci impegniamo a fornire solo i migliori prodotti, selezionati con cura per garantire la massima qualità e sicurezza.</p>
      
      <h2>Cosa offriamo</h2>
      <p>Il nostro team esperto è qui per consigliarti e guidarti nella scelta dei prodotti più adatti alle tue esigenze specifiche. Dalle proteine ​​ai carboidrati, dagli integratori pre-allenamento ai recuperatori post-allenamento, abbiamo tutto ciò di cui hai bisogno per massimizzare i tuoi risultati e migliorare le tue performance.</p>
      
      <img src={foto} alt="Nutrizione sportiva" />

      <h2>La tua esperienza di shopping</h2>
      <p>Ci impegniamo per la tua comodità offrendoti un'esperienza di shopping senza problemi. Il nostro negozio è progettato per essere accogliente e accattivante, con personale cordiale e disponibile sempre pronto ad assisterti.</p>
      
      <h2>Vieni a trovarci!</h2>
      <p>Se sei pronto a prendere sul serio il tuo benessere e le tue prestazioni sportive, vieni a trovarci al Nutrition Sport Shop. Siamo qui per aiutarti a raggiungere i tuoi obiettivi e a vivere al meglio la tua vita attiva!</p>
    </div>
  );
}

