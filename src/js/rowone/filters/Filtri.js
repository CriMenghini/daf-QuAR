import React, { Component } from 'react';
import '../../../css/style.css';
import FiltroAnno from './FiltroAnno.js';
import OrdinaBubble from './OrdinaBubble.js';

class Filtri extends Component {

  render() {
    return (
      <div id="filters">

        <FiltroAnno />
        <br />
        <OrdinaBubble />

      </div>
    );
  }
}

export default Filtri;