import React, { Component } from 'react';
import '../../css/style.css';
import Utilizzo from './Utilizzo.js';
import Aggiornamenti from './Aggiornamenti.js';
import Dati from './Dati.js';
import Source from './Source.js';
import Credits from './Credits.js';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
        city: 'ROMA'
    };
  };

  render() {
    return (
      <div id="header-style">
		<p id="nav">
			<a id="how" href="#loginScreen">utilizzo</a>
			 |
			<a id="how" href="#aggiornamentiScreen">aggiornamenti</a>
			 |
			<a id="how" href="#datiScreen">dati</a>
			 |
			<a id="how" href="#sourceScreen">source</a>
			 |
			<a id="how" href="#creditsScreen">credits</a>
		</p>

		<h1 id="main-title">QUALITÀ DELL'ARIA A <span id="citta">{this.state.city}</span> 0.1</h1>
		<h2 id="main-subtitle"> controllo giornaliero della qualità dell'aria </h2>

        <Utilizzo />
        <div id="cover"></div>

        <Aggiornamenti />
		<div id="cover"></div>

        <Dati />
		<div id="cover"></div>

        <Source />
		<div id="cover"></div>

        <Credits />
		<div id="cover"></div>

	  </div>
    );
  }
}

export default Header;