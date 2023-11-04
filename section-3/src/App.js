import React, { Component } from 'react';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.jpg"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Seção 3</h1>
          <div><img src={img1} height="693" width="1000" alt="" /></div>
          <div><img src={img2} alt="" /></div>
        </div>
    );
  }
}

export default App;
