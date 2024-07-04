import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Conten from '../src/components/conten/Conten';
import Conten2 from '../src/components/conten2/Conten2';
import Home from '../src/components/Home';
import '../src/components/header/header.css';
import '../src/components/contact/contact.css';
import '../src/components/conten/conten.css';
import '../src/components/footer/footer.css';
import './main.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Conten" element={<Conten />} />
        <Route path="/Conten2" element={<Conten2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
