import React, { Component } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>CarDetails</h2>
          <CarDetails/>
      </div>
    );
  }
}

export default App;
