import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className='footer'>
          <div className='row'>
            <div className='col-1-of-2'>
              <div className='footer__navigation'>
                <ul className='footer__list'>
                  <li className='footer__item'>
                    <a
                      href='https://github.com/jacobbathan'
                      className='footer__link'
                    >
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
                    <a
                      href='https://www.linkedin.com/in/jacobbathan/'
                      className='footer__link'
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className='footer__item'>
                    <a
                      href='mailto:jacobbathan@gmail.com'
                      className='footer__link'
                    >
                      Email
                    </a>
                  </li>
                  <li className='footer__item'>
                    <a href='www.google.com' className='footer__link'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-1-of-2'>
              <p className='footer__copyright'>Built using React and Sass</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
