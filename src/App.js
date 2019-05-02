import React from 'react';
import './App.css';
import Navbar from '../src/components/navbar/Navbar.jsx';
import Main from '../src/components/dashboard/Main.jsx';
import Footer from '../src/components/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
