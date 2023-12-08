  import React from 'react';
  import './App.css';
  import { BrowserRouter, Routes, Route} from 'react-router-dom'
  import Home from './pages/Home';
  import About from './pages/About';
  import Navbar from './components/Navbar';
  import Product from './pages/Product';
  function App(){
      return (
        <div className="App">
            <h2>React Router</h2>
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products/:id" element={<Product/>}/>
            </Routes>
            </BrowserRouter>
          </div>
      );
  }

  export default App;
