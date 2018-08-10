import React, { Component } from 'react';
import '../css/style.css';
import Header from './navigation/Header.js';
import RowOne from './rowone/RowOne.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RowOne />
      </div>
    );
  }
}

export default App;
