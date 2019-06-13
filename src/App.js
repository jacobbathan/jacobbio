import React from 'react';
import './css/style.css';
import Header from '../src/components/dashboard/Header.jsx';
import About from '../src/components/dashboard/About.jsx';
import Footer from '../src/components/footer/Footer.jsx';
import Projects from './components/dashboard/Projects';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
