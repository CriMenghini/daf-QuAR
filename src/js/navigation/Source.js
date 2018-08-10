import React, { Component } from 'react';
import '../../css/style.css';

class Source extends Component {

  render() {
    return (
      <div id="sourceScreen">
			<div id="loginScreen-header">
				<span id="loginScreen-title">SOURCE: CODICE SORGENTE</span>
			</div>
			<div id="loginScreen-content">
				<span id="loginScreen-spiegazione"> Contenuto della dashboard </span>
			</div>
			<a href="#" className="cancel">&times;</a>
	  </div>
    );
  }
}

export default Source;