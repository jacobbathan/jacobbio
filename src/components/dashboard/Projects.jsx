import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-tours' id='section-tours'>
          <section className='section-about' style={{ marginTop: '5rem' }}>
            <div className='u-center-text u-margin-bottom-big'>
              <h2 className='heading-secondary' style={{ margin: '3rem' }}>
                Projects
              </h2>
              <div className=''>
                <div className='col-1-of-2'>
                  <div className='row'>
                    <div className='col-1-of-3'>
                      <div className='card'>
                        <div className='card__side card__side--front'>
                          <div className='card__picture card__picture--1'>
                            &nbsp;
                          </div>
                          <h4 className='card__heading'>
                            <span className='card__heading-span card__heading-span--1'>
                              Outlayr
                            </span>
                          </h4>
                          <div className='card__details'>
                            OutlayR is an application that provides social
                            commerce merchants an easier way to reach social
                            media influencers for collaborations and other
                            social media-based campaigns. On the other hand, it
                            allows influencers to search for and post in
                            specific campaigns that fit within their field.
                          </div>
                        </div>
                        <div className='card__side card__side--back card__side--back-1'>
                          <div className='card__cta'>
                            <a
                              href='http://outlayr.azurewebsites.net/'
                              className='btn btn--white'
                            >
                              View Live Site
                            </a>
                            <br />
                            {/* <a
                              href='https://github.com'
                              className='btn btn--white'
                              style={{ marginTop: '5rem' }}
                            >
                              View Repository
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-1-of-3'>
                      <div className='card'>
                        <div className='card__side card__side--front'>
                          <div className='card__picture card__picture--2'>
                            &nbsp;
                          </div>
                          <h4 className='card__heading'>
                            <span className='card__heading-span card__heading-span--2'>
                              Hope for the World
                            </span>
                          </h4>
                          <div className='card__details'>
                            Static page landing site for a local church based in
                            Los Angeles. Built using React.js and styled using
                            Sass.
                          </div>
                        </div>
                        <div className='card__side card__side--back card__side--back-2'>
                          <div className='card__cta'>
                            <a
                              href='https://hopefortheworld.herokuapp.com'
                              className='btn btn--white'
                            >
                              View Live (Early Draft)
                            </a>
                            {/* <a
                              href='https://github.com'
                              className='btn btn--white'
                              style={{ marginTop: '5rem' }}
                            >
                              View Repository
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-1-of-3'>
                      <div className='card'>
                        <div className='card__side card__side--front'>
                          <div className='card__picture card__picture--3'>
                            &nbsp;
                          </div>
                          <h4 className='card__heading'>
                            <span className='card__heading-span card__heading-span--3'>
                              Other project thing
                            </span>
                          </h4>
                          <div className='card__details'>
                            This is where text would go if I had some third
                            project to show off but I don't, so heres some
                            placeholder text for now look at this samoyed hes so
                            majestic, ya?
                          </div>
                        </div>
                        <div className='card__side card__side--back card__side--back-3'>
                          <div className='card__cta'>
                            <a
                              href='https://github.com'
                              className='btn btn--white'
                            >
                              View Live
                            </a>
                            <a
                              href='https://github.com/jacobbathan'
                              className='btn btn--white'
                              style={{ marginTop: '5rem' }}
                            >
                              View Repository
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
