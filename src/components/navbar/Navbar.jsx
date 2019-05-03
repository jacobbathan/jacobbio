import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <div>
          <button type="button" className="btn black-background white">
            Home
          </button>
          <button type="button" className="btn black-background white">
            Projects
          </button>
          <button type="button" className="btn black-background white">
            Resume
          </button>
          <button type="button" className="btn black-background white">
            Contact
        </button>
        <button type='button' className="btn black-blackground white">
            Other
        </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
