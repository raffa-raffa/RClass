import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Form React</h2>
          <MyForm user={{name: "Brianna", email:"briannadog@pet.com", bio:"i'm a...", role:"admin"}}/>
        </div>
    );
  }
}

export default App;
