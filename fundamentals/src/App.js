import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Fundamentals React</h1>
          <FirstComponent/>
          <TemplateExpressions/>
          <Events/>
        </div>
      </div>
    );
  }
}

export default App;
