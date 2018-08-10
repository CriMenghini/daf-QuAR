import React, { Component } from 'react';
import '../../../css/style.css';

class OrdinaBubble extends Component {

  constructor(props) {
    super(props);
    this.state = {isSortedOn: false};

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.setState(prevState => ({
          isSortedOn: !prevState.isSortedOn
    }));
  }

  render() {
    return (
        <div id="ordina-centraline">
            <span id="ordina-centraline-title">
                Ordina le stazioni:
            </span>


            <button className="selezOrdine" onClick={this.handleClick} id='button-ordine'>
                {this.state.isSortedOn ? 'No' : 'Sì'}
            </button>


        </div>
	);
  }

}

export default OrdinaBubble;