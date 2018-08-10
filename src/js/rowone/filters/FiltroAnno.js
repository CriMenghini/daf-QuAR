import React, { Component } from 'react';
import '../../../css/style.css';

class FiltroAnno extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '2018'};

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div>
            <div id="loginScreen-header">
               <span id="loginScreen-title" className="filtro">FILTRA I DATI</span>
            </div>


            <div id="filters-anno">
                <span id="filtro-anni">
                    Selezionare l'anno di interesse:
                </span>


                <select value={this.state.value} onChange={this.handleChange} className="selezAnno">
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018" defaultValue>2018</option>
                </select>

            </div>
        </div>
	);
  }

}

export default FiltroAnno;