import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hooks/useAuthentication';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const AppContent = () => {
  const [user, setUser] = useState(undefined);
  const [auth] = useAuthentication();
  const loadinguser = user === undefined;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loadinguser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Register />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </div>
  );
};

class App extends React.Component {
  render() {
    return <AppContent />;
  }
}

export default App;
