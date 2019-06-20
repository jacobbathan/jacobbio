import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-about' style={{ marginTop: '5rem' }}>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Projects</h2>
            <div className=''>
              <div className='col-1-of-2'>
                <p className='paragraph'>
                  <div class='row'>
                    <div class='col-1-of-3'>
                      <div class='card'>
                        <div class='card__side card__side--front'>
                          <div class='card__picture card__picture--1'>
                            &nbsp;
                          </div>
                          <h4 class='card__heading'>
                            <span class='card__heading-span card__heading-span--1'>
                              The Sea Explorer
                            </span>
                          </h4>
                          <div class='card__details'>
                            <ul>
                              <li>3 day tours</li>
                              <li>Up to 30 people</li>
                              <li>2 tour guides</li>
                              <li>Sleep in cozy hotels</li>
                              <li>Difficulty: easy</li>
                            </ul>
                          </div>
                        </div>
                        <div class='card__side card__side--back card__side--back-1'>
                          <div class='card__cta'>
                            <div class='card__price-box'>
                              <p class='card__price-only'>Only</p>
                              <p class='card__price-value'>$297</p>
                            </div>
                            <a href='#popup' class='btn btn--white'>
                              Book now!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='col-1-of-3'>
                      <div class='card'>
                        <div class='card__side card__side--front'>
                          <div class='card__picture card__picture--2'>
                            &nbsp;
                          </div>
                          <h4 class='card__heading'>
                            <span class='card__heading-span card__heading-span--2'>
                              The Forest Hiker
                            </span>
                          </h4>
                          <div class='card__details'>
                            <ul>
                              <li>7 day tours</li>
                              <li>Up to 40 people</li>
                              <li>6 tour guides</li>
                              <li>Sleep in provided tents</li>
                              <li>Difficulty: medium</li>
                            </ul>
                          </div>
                        </div>
                        <div class='card__side card__side--back card__side--back-2'>
                          <div class='card__cta'>
                            <div class='card__price-box'>
                              <p class='card__price-only'>Only</p>
                              <p class='card__price-value'>$497</p>
                            </div>
                            <a href='#popup' class='btn btn--white'>
                              Book now!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='col-1-of-3'>
                      <div class='card'>
                        <div class='card__side card__side--front'>
                          <div class='card__picture card__picture--3'>
                            &nbsp;
                          </div>
                          <h4 class='card__heading'>
                            <span class='card__heading-span card__heading-span--3'>
                              The Snow Adventurer
                            </span>
                          </h4>
                          <div class='card__details'>
                            <ul>
                              <li>5 day tours</li>
                              <li>Up to 15 people</li>
                              <li>3 tour guides</li>
                              <li>Sleep in provided tents</li>
                              <li>Difficulty: hard</li>
                            </ul>
                          </div>
                        </div>
                        <div class='card__side card__side--back card__side--back-3'>
                          <div class='card__cta'>
                            <div class='card__price-box'>
                              <p class='card__price-only'>Only</p>
                              <p class='card__price-value'>$897</p>
                            </div>
                            <a href='#popup' class='btn btn--white'>
                              Book now!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
