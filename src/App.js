import React, { Component } from 'react';
import logo from './stark.png';
import './App.css';

import Travel from "./Travel";
import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Travel
          image="https://www.legrandbleunosybe.com/wp-content/uploads/2017/09/Rio-de-janeiro.jpg"
          destination="Rio de Janeiro"
          country="Brésil"
          distance="8 869 km"
        />
        <Travel
          image="https://media.routard.com/image/39/5/tokyo.1484395.w740.jpg"
          destination="Tokyo"
          country="Japon"
          distance="10 084 km"
        />
        < Travels />
      </div>
    );
  }
}

export default App;
