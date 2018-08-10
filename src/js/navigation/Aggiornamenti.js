import React, { Component } from 'react';
import '../../css/style.css';

class Aggiornamenti extends Component {

  render() {
    return (
      <div id="aggiornamentiScreen">
			<div id="loginScreen-header">
				<span id="loginScreen-title">AGGIORNAMENTI</span>
			</div>
			<div id="loginScreen-content">
				<span id="loginScreen-spiegazione"> I dati mostrati in questa applicazione sono aggiornati
				con con cadenza giornaliera.</span>
					<br/>
					<br/>
				<span id="loginScreen-spiegazione">
				La visualizzazione viene aggiornata dipendentemente dalle Issue o
					Pull Request presentate sulla repository GitHub del progetto.</span>
					<br/>
					<br/>
				<span id="loginScreen-spiegazione">
				Ogni cittadino è libero di richiedere una modifica o di/a proporne una.
					Questa verrà valutata poi dallo staff.
				</span>
			</div>
			<a href="#" className="cancel">&times;</a>
		</div>
    );
  }
}

export default Aggiornamenti;