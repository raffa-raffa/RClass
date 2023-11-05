import React, { Component } from 'react';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.jpg"
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Seção 3</h1>
            <h3 >Images</h3>
          <div className='container-img'>
          <div><img src={img1} height="300" width="300" alt="" /></div>
          <div><img src={img2} height="300" width="300" alt="" /></div>
          </div>
          <div className='divisor'></div>
            <h3>Hook: useState</h3>
          <ManageData/>
          <div className='divisor'></div>
            <h3>Listas</h3>
          <div className='divisor'></div>
          <ListRender/>
          <div className='divisor'></div>
          <h3>Conditional</h3>
          <ConditionalRender/>
        </div>
    );
  }
}

export default App;
