import React from 'react';
import './css/style.css';
import Main from '../src/components/dashboard/Main.jsx';
import About from '../src/components/dashboard/About.jsx';
import Footer from '../src/components/footer/Footer.jsx';

function App() {
  return (
    <React.Fragment>
      <div>
        {/* <Navbar /> */}
        <Main />
        <About />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
