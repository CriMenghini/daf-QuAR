import React, { Component } from 'react';
import '../../css/style.css';

class Utilizzo extends Component {

  render() {
    return (
      <div id="loginScreen">
			<div id="loginScreen-header">
				<span id="loginScreen-title">UTILIZZO: NAVIGARE L'APPLICAZIONE</span>
			</div>
			<div id="loginScreen-content">
				<span id="loginScreen-spiegazione"> Contenuto della dashboard </span>
			</div>
			<a href="#" className="cancel">&times;</a>
	  </div>
    );
  }
}

export default Utilizzo;