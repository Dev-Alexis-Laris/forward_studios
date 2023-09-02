import React from 'react';
import './Style.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Partners from './components/Partners';
import Works from './components/Works'
import Contacto from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About className="full-screen-section"/>
      <Works className="full-screen-section"/>
      <Partners className="full-screen-section"/>
      <Contacto className="full-screen-section"/>
    </div>
  );
}

export default App;
