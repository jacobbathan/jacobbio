import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Contact</h3>
        <br />
        <div className='footer'>
          <div class='row'>
            <div class='col-1-of-2'>
              <div class='footer__navigation'>
                <ul class='footer__list'>
                  <li class='footer__item'>
                    <a href='#' className='footer__link'>
                      Github
                    </a>
                  </li>
                  <li class='footer__item'>
                    <a
                      href='https://www.dropbox.com/s/mmw8ucxa7q7slkj/resume-jbathan.pdf?dl=0'
                      className='footer__link'
                    >
                      Resume
                    </a>
                  </li>
                  <li class='footer__item'>
                    <a href='#' className='footer__link'>
                      Linkedin
                    </a>
                  </li>
                  <li class='footer__item'>
                    <a href='#' className='footer__link'>
                      Email
                    </a>
                  </li>
                  <li class='footer__item'>
                    <a href='#' className='footer__link'>
                      Something?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-1-of-2'>
              <p class='footer__copyright'>Built using React and Sass</p>
            </div>
          </div>

          {/* <div className="contactText">
            <a href="https://github.com/jacobbathan">github</a>{' '}
            <a href="https://www.dropbox.com/home/Resumes?preview=resume-jbathan.pdf">
              resume
            </a>{' '}
            <a href="https://www.linkedin.com/in/jacobbathan/">linkedin</a>{' '}
            <a href="mailto:jacobbathan@gmail.com">mail</a>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
