import React, { Component } from 'react';
import '../../css/style.css';

class Dati extends Component {

  render() {
    return (
      <div id="datiScreen">
			<div id="loginScreen-header">
				<span id="loginScreen-title">DATI: DESCRIZIONE E FONTI</span>
			</div>
			<div id="loginScreen-content">
				<span id="loginScreen-spiegazione"> I dati cui si fa riferimento provengono da:
				<br/>

					<ul>
						<li><b>ARPA Lazio:</b> Per ogni agente chimico mette a disposizione
							la serie storica giornaliera.</li>
						<li><b>Open Data della Regione Lazio:</b> Mette a disposizione un dataset che geolocalizza le
							stazioni da cui sono fatte le rilevazioni. Mancano le ultime inserite a seguito dell'ultimo
							aggiornamento del dataset.
							Sono stati aggiunti manualmente in accordo con la documentazione dei dati ARPA Lazio.</li>
						<li><b>Open Data Roma Capitale:</b> Limiti imposti dalla legge
							[inserire decreti legge] per la concentrazione
							di agenti chimici nell'aria.</li>

					</ul>

				</span>
			</div>
			<a href="#" className="cancel">&times;</a>
		</div>
    );
  }
}

export default Dati;