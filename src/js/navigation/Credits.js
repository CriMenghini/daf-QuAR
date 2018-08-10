import React, { Component } from 'react';
import '../../css/style.css';

class Credits extends Component {

  render() {
    return (
      <div id="creditsScreen">
			<div id="loginScreen-header">
				<span id="loginScreen-title">CREDITS</span>
			</div>
			<div id="loginScreen-content">
				<span id="loginScreen-spiegazione"> L'applicazione è stata
					sviluppata dal Team per la Trasformazione Digitale.</span>
			</div>
			<a href="#" className="cancel">&times;</a>
	  </div>
    );
  }
}

export default Credits;