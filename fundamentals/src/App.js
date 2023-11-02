import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Fundamentals React</h1>
          <FirstComponent/>
        </div>
      </div>
    );
  }
}

export default App;
