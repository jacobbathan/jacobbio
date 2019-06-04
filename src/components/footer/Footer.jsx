import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Contact</h3>
        <br />
        <div className="contactContainer">
          <div className="contactText">
            <a href="https://github.com/jacobbathan">github</a>{' '}
            <a href="https://www.dropbox.com/home/Resumes?preview=resume-jbathan.pdf">
              resume
            </a>{' '}
            <a href="https://www.linkedin.com/in/jacobbathan/">linkedin</a>{' '}
            <a href="mailto:jacobbathan@gmail.com">mail</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
