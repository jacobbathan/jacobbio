import React from 'react';
import './css/style.css';
import Header from '../src/components/dashboard/Header.jsx';
import About from '../src/components/dashboard/About.jsx';
import Footer from '../src/components/footer/Footer.jsx';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
