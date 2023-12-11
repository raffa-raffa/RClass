    import React from 'react';
    import './App.css';
    import { BrowserRouter, Routes, Route} from 'react-router-dom'
    import Home from './pages/Home';
    import About from './pages/About';
    import Navbar from './components/Navbar';
    import Product from './pages/Product';
    import Info from './pages/Info';
    import  NotFound from './pages/NotFound';
    import SearchForm from './components/SearchForm';
    import Search from './pages/Search';

    function App(){
        return (
          <div className="App">
              <h2>React Router</h2>
              <BrowserRouter>
              <Navbar/>
              <SearchForm/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:id" element={<Product/>}/>
                <Route path="/products/:id/info" element={<Info/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/search" element={<Search/>}/>
              </Routes>
              </BrowserRouter>
            </div>
        );
    }

    export default App;
