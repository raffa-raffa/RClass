import React, { Component } from 'react';
import './App.css';
import SecretWord from './components/SecretWord';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SecretWord/>
        </div>
    );
  }
}

export default App;
