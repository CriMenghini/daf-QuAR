import React, { Component } from 'react';
import '../../css/style.css';
import Filtri from './filters/Filtri.js';
import Bubbles from './bubbles/Bubbles.js';
import centraline from '../../data/data.tsv';


class RowOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
        width: 960,
        height: 600,
        centraline: [
              {'nome': 'A','size': 10},
              {'nome': 'B','size': 2},
              {'nome': 'C','size': 4},
              {'nome': 'D','size': 1},
              {'nome': 'E','size': 7},
            ]
    };
  };

  render() {
    return (
        <div id="wrapper-row-1">
            <Filtri />

            <Bubbles data={this.state.centraline}
                     width={this.state.width}
                     height={this.state.height}/>
        </div>
	);
  }

}

export default RowOne;