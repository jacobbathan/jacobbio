import React from 'react';

class Technologies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Front End
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3 / SASS</li>
                    <li>Javascript</li>
                    <li>React / Redux</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Server
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>C#</li>
                    <li>.Net Core</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Database
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Deployment
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>Git</li>
                    <li>Team Foundation Server</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Technologies;
