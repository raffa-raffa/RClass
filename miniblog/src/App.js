  import React, { Component } from 'react';
  import './App.css';
  import{BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
  import Home from "./pages/Home/Home"
  import About from "./pages/About/About"
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import Login from './pages/Login/Login';
  import Register from './pages/Register/Register';
  import { AuthProvider } from './context/AuthContext';
  class App extends Component {
    render() {
      return (
        <div className="App">
          <AuthProvider>
            <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastrar" element={<Register/>}/>
            </Routes>
          </div>
          </BrowserRouter>
            </AuthProvider>
          <Footer/>
          </div>
      );
    }
  }

  export default App;
