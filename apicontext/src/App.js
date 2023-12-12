  import React, { Component } from 'react';
  import './App.css';
  import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
  import Home from './pages/Home';
  import About from './pages/About';
  import Product from "./pages/Product"
  import Navbar from './components/Navbar';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Context</h1>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
          </Routes>
          </BrowserRouter>
          </div>
      );
    }
  }

  export default App;
